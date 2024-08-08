<?php

namespace Musie\LaravelChapa\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Musie\LaravelChapa\Facades\Chapa;
use App\Models\User;
use Inertia\Inertia;

class ChapaController extends Controller
{
    public function initializePayment(Request $request)
    {
        $data = [
            'amount' => $request->amount,
            'currency' => 'ETB',
            'tx_ref' => uniqid(),
            'redirect_url' => route('chapa.callback'),
            'customer' => [
                'email' => $request->email,
                'name' => $request->name,
            ],
            'customizations' => [
                'title' => 'Buy Coins',
                'description' => "{$request->coins} Coins for {$request->amount} Birr",
            ],
        ];

        $response = Chapa::initializePayment($data);

        // Redirect the user to Chapa's checkout page
        return redirect($response['data']['checkout_url']);
    }

    public function handleCallback(Request $request)
    {
        $status = $request->status;

        // Verify payment before updating the coin balance
        if ($status === 'success') {
            // You might want to verify the payment with Chapa's API here

            // Find the authenticated user by email
            $user = User::where('email', $request->email)->first();

            if ($user) {
                // Update the user's coin balance directly in the users table
                $user->coins += $request->coins;
                $user->save();
            }

            // Redirect with a success message
            return Inertia::render('CoinPackages', [
                'user' => $user,
                'coins' => $user->coins,
            ])->with('success', 'Payment successful! Coins have been added to your account.');
        }

        // If payment failed, redirect with an error message
        return Inertia::render('CoinPackages', [
            'user' => auth()->user(),
        ])->with('error', 'Payment failed! Please try again.');
    }

    public function verifyPayment($tx_ref)
    {
        $response = Chapa::verifyPayment($tx_ref);

        return response()->json($response);
    }
}
