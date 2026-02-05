# LaraverTask - Блог с комментариями

Простое приложение-блог на Laravel 12 + React 18 с REST API для статей и комментариев, контейнеризированное с помощью Docker.

## Требования

Перед установкой убедитесь, что у вас установлены:
- [Docker](https://www.docker.com/get-started) (версия 20.10+)
- [Docker Compose](https://docs.docker.com/compose/install/) (версия 2.0+)
- Git (опционально, для клонирования репозитория)

## Быстрый старт

### 1. Клонирование репозитория

```bash
git clone https://github.com/fedek1324/laravel-blog
cd laravel-blog/
```

### 2. Запуск Docker контейнеров

При запущенном Docker Desktop выполните команду для скачивания образов и запуска контейнеров (может занять до 15 минут):

```bash
docker-compose up -d
```

Эта команда запустит 3 контейнера:
- `dockerized-laravel-app` - PHP приложение Laravel
- `dockerized-laravel-webserver` - Nginx веб-сервер
- `dockerized-laravel-db` - MySQL база данных

**Примечание:** При первом запуске автоматически выполнится установка npm зависимостей и сборка фронтенда. Это может занять несколько минут.


### 3. Запуск миграций и заполнение БД


Запуск миграций (создание таблиц)
```bash
docker-compose exec app php artisan migrate
```

Заполнение БД тестовыми данными (5 статей с 3 комментариями каждая)
```bash
docker-compose exec app php artisan db:seed
```

Или выполнить всё за один раз (пересоздание БД с нуля):

```bash
docker-compose exec app php artisan migrate:fresh --seed
```

### 4. Доступ к приложению

Откройте браузер и перейдите по адресу:

```
http://localhost:8080
```

Если nginx показывает ошибку 502 то нужно подождать до 10 минут пока Docker соберёт все контейнеры. Отслеживать можно по логу контейнера dockerized-laravel-app. И повторить пункт 3.
