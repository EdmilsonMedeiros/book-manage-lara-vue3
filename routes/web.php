<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Middleware\AuthMiddleware;
use Illuminate\Support\Facades\Route;

/**
 * External routes:
 */
Route::get("/login", [AuthController::class, "index"])->name("login");
Route::post("/login", [AuthController::class, "loginSubmit"])->name("loginSubmit");
Route::get("/register", [AuthController::class, "register"])->name("register");
Route::post('/register', [AuthController::class, 'registerSubmit'])->name('registerSubmit');

/**
 * Protected routes:
 */

Route::middleware([AuthMiddleware::class])->group(function(){
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/logOut', [AuthController::class, "logOut"])->name('logOut');
});