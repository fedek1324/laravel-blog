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

При запущенном Docker Desktop:

```bash
# 1. Создать и запустить контейнер
docker-compose up -d

# 2. Установить npm зависимости внутри контейнера
docker-compose exec -T app npm install

# 3. Собрать фронтенд (создал build файлы)
docker-compose exec -T app npm run build

# 4. Проверить что файлы создались (опционально)
docker-compose exec -T app ls -la public/build/
```

Эта команда запустит 3 контейнера:
- `dockerized-laravel-app` - PHP приложение Laravel
- `dockerized-laravel-webserver` - Nginx веб-сервер
- `dockerized-laravel-db` - MySQL база данных


### 3. Запуск миграций и заполнение БД

```bash
# Запуск миграций (создание таблиц)
docker-compose exec app php artisan migrate

# Заполнение БД тестовыми данными (5 статей с 3 комментариями каждая)
docker-compose exec app php artisan db:seed
```

Или выполните всё за один раз (пересоздание БД с нуля):

```bash
docker-compose exec app php artisan migrate:fresh --seed
```

### 4. Доступ к приложению

Откройте браузер и перейдите по адресу:

```
http://localhost:8080
```
