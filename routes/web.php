<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\CoinController;
use App\Http\Controllers\DashboardController;
use Musie\LaravelChapa\Controllers\ChapaController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::post('/deduct-coins', [DashboardController::class, 'deductCoins'])->name('deduct-coins');
});

Route::middleware('auth')->group(function () {
    Route::get('/about', [AboutController::class, 'index'])->name('about');
    Route::get('/coins', [CoinController::class, 'index'])->name('coins');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::post('/chapa/payment', [ChapaController::class, 'initializePayment'])->name('chapa.payment');
Route::get('/chapa/callback', [ChapaController::class, 'handleCallback'])->name('chapa.callback');
Route::get('/chapa/verify/{tx_ref}', [ChapaController::class, 'verifyPayment'])->name('chapa.verify');


require __DIR__.'/auth.php';
