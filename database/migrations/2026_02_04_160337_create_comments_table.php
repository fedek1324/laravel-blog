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
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('article_id')->constrained()->onDelete('cascade'); // Связь со статьей (удаление каскадное)
            $table->string('author_name'); // Имя автора комментария
            $table->text('content'); // Текст комментария
            $table->timestamps(); // created_at, updated_at
        });
    }

    /**
     * Откат миграций
     */
    public function down(): void
    {
        Schema::dropIfExists('comments');
    }
};
