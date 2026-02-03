<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Модель комментария к статье
 */
class Comment extends Model
{
    /** @use HasFactory<\Database\Factories\CommentFactory> */
    use HasFactory;

    /**
     * Массово заполняемые атрибуты
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'article_id',
        'author_name',
        'content',
    ];

    /**
     * Получить статью, к которой относится комментарий
     */
    public function article(): BelongsTo
    {
        return $this->belongsTo(Article::class);
    }
}
