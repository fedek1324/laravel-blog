<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\Comment;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Заполнение базы данных тестовыми данными
     */
    public function run(): void
    {
        // Создаём 5 статей, к каждой добавляем по 3 комментария
        Article::factory(5)
            ->has(Comment::factory()->count(3))
            ->create();
    }
}
