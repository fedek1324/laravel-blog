<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * Фабрика для модели Article
 *
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
    /**
     * Определение состояния модели по умолчанию
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(), // Случайный заголовок
            'content' => fake()->paragraphs(5, true), // 5 случайных параграфов
        ];
    }
}
