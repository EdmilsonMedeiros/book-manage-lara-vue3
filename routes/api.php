<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\AuthorController;
use App\Http\Controllers\Api\BookController;
use Illuminate\Support\Facades\Route;

/**
 * External routes
 */
Route::group(['prefix' => 'auth'], function(){
    Route::post('register', [AuthController::class, 'store']);
    Route::post('login', [AuthController::class, 'login']);
});

/**
 * Protected routes
 */
Route::middleware(['auth:sanctum', 'admin'])->group(function(){

    Route::get('/me', [AuthController::class, 'me']);

    Route::prefix('authors')->group(function(){
        Route::get('/', [AuthorController::class, 'index']);
        Route::get('/{author}', [AuthorController::class, 'show']);
        Route::put('update/{author}', [AuthorController::class, 'update']);
        Route::delete('delete/{author}', [AuthorController::class, 'destroy']);
        Route::post('/store', [AuthorController::class, 'store']);
    });

    Route::prefix('books')->group(function(){
        Route::get('/', [BookController::class, 'index']);
        Route::get('/{book}', [BookController::class, 'show']);
        Route::post('/update', [BookController::class, 'update']);
        Route::delete('delete/{book}', [BookController::class, 'destroy']);
        Route::post('/store', [BookController::class, 'store']);
    });
});
