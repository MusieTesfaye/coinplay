<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        return Inertia::render('Dashboard', [
            'user' => $user,
            'coins' => $user->coins,
        ]);
    }

    public function deductCoins(Request $request)
    {
        $user = Auth::user();
        $cost = $request->input('cost');

        if ($user->coins < $cost) {
            return response()->json(['message' => 'Not enough coins'], 400);
        }

        $user->coins -= $cost;
        $user->save();

        // Redirect to the current route to refresh the page
        
    }
}