<?php

use App\Http\Controllers\ArticleController;
use Illuminate\Support\Facades\Route;

// Главная страница приложения
Route::get('/', function () {
    return view('welcome');
});

// API маршруты для работы со статьями
Route::prefix('api')->group(function () {
    Route::get('/articles', [ArticleController::class, 'index']); // Получить список всех статей
    Route::get('/articles/{id}', [ArticleController::class, 'show']); // Получить одну статью
    Route::post('/articles', [ArticleController::class, 'store']); // Создать новую статью
    Route::put('/articles/{id}', [ArticleController::class, 'update']); // Обновить статью
    Route::delete('/articles/{id}', [ArticleController::class, 'destroy']); // Удалить статью
});
