# LaraverTask - Блог с комментариями

Простое приложение-блог на Laravel 12 + React 18 с REST API для статей и комментариев, контейнеризированное с помощью Docker.

## Описание проекта

Full-stack веб-приложение, которое предоставляет:
- REST API для управления статьями блога (CRUD)
- Возможность добавления комментариев к статьям
- React-интерфейс для взаимодействия с блогом
- Полностью Dockerизированное окружение для простого развертывания

## Технологический стек

### Backend
- **Laravel 12** - PHP фреймворк
- **PHP 8.2** - Язык программирования
- **MySQL 8.0** - База данных

### Frontend
- **React 18.3.1** - JavaScript библиотека
- **Vite 6.0** - Сборщик и dev-сервер
- **Tailwind CSS 4.0** - CSS фреймворк
- **Axios** - HTTP клиент

### Infrastructure
- **Docker & Docker Compose** - Контейнеризация
- **Nginx (Alpine)** - Веб-сервер
- **PHP-FPM** - FastCGI Process Manager

## Требования

Перед установкой убедитесь, что у вас установлены:
- [Docker](https://www.docker.com/get-started) (версия 20.10+)
- [Docker Compose](https://docs.docker.com/compose/install/) (версия 2.0+)
- Git (опционально, для клонирования репозитория)

## Быстрый старт

### 1. Клонирование репозитория

```bash
git clone <repository-url>
cd laraverTask
```

### 2. Запуск Docker контейнеров

```bash
docker-compose up -d
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
