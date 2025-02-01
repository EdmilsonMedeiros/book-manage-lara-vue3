<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
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

    Route::get('/logOut', [AuthController::class, "logOut"])->name('logOut');

    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

    Route::prefix('authors')->group(function(){
        Route::get('/', [AuthorController::class, 'index'])->name('authors.index');
        Route::post('store', [AuthorController::class, 'store'])->name('authors.store');
        Route::put('update/{author}', [AuthorController::class, 'update'])->name('authors.update');
        Route::delete('destroy/{author}', [AuthorController::class, 'destroy'])->name('authors.destroy');
    });

    Route::prefix('books')->group(function(){
        Route::post('store', [BookController::class, 'store'])->name('books.store');
        Route::post('update', [BookController::class, 'update'])->name('books.update');
        Route::delete('destroy/{book}', [BookController::class, 'destroy'])->name('books.destroy');
    });

});