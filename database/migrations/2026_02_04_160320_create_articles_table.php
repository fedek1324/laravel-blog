<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Запуск миграций
     */
    public function up(): void
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->string('title'); // Заголовок статьи
            $table->text('content'); // Содержание статьи
            $table->timestamps(); // created_at, updated_at
        });
    }

    /**
     * Откат миграций
     */
    public function down(): void
    {
        Schema::dropIfExists('articles');
    }
};
