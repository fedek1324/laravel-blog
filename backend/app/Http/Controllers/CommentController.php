<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Добавить комментарий к статье
     *
     * @param \Illuminate\Http\Request $request
     * @param string $articleId
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request, string $articleId)
    {
        // Проверяем, существует ли статья
        $article = Article::findOrFail($articleId);

        // Валидация входных данных
        $validated = $request->validate([
            'author_name' => 'required|string|max:255', // Имя автора обязательно
            'content' => 'required|string', // Содержание комментария обязательно
        ]);

        // Создаём комментарий
        $comment = Comment::create([
            'article_id' => $article->id,
            'author_name' => $validated['author_name'],
            'content' => $validated['content'],
        ]);

        return response()->json($comment, 201);
    }
}
