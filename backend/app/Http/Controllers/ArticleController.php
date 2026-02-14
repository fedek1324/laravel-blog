<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    /**
     * Получить список всех статей
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        // Получаем все статьи, отсортированные по дате создания (новые первые)
        $articles = Article::orderBy('created_at', 'desc')->get();
        return response()->json($articles);
    }

    /**
     * Создать новую статью
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        // Валидация входных данных
        $validated = $request->validate([
            'title' => 'required|string|max:255', // Заголовок обязателен, максимум 255 символов
            'content' => 'required|string', // Содержание обязательно
        ]);

        // Создаём статью с валидированными данными
        $article = Article::create($validated);
        return response()->json($article, 201);
    }

    /**
     * Получить одну статью с комментариями
     *
     * @param string $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(string $id)
    {
        // Загружаем статью вместе с комментариями (eager loading)
        $article = Article::with(['comments' => fn($q) => $q->orderBy('created_at', 'desc')])->findOrFail($id);
        return response()->json($article);
    }

    /**
     * Обновить существующую статью
     *
     * @param \Illuminate\Http\Request $request
     * @param string $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, string $id)
    {
        // Находим статью или выбрасываем 404
        $article = Article::findOrFail($id);

        // Валидация (поля опциональны благодаря 'sometimes')
        $validated = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'content' => 'sometimes|required|string',
        ]);

        // Обновляем только переданные поля
        $article->update($validated);
        return response()->json($article);
    }

    /**
     * Удалить статью
     *
     * @param string $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(string $id)
    {
        // Находим статью или выбрасываем 404
        $article = Article::findOrFail($id);
        $article->delete();

        // Возвращаем пустой ответ со статусом 204 (No Content)
        return response()->json(null, 204);
    }
}
