#!/bin/bash
set -e

# Создаём необходимые директории, если они не существуют
mkdir -p /var/www/html/storage/framework/cache
mkdir -p /var/www/html/storage/framework/sessions
mkdir -p /var/www/html/storage/framework/views
mkdir -p /var/www/html/storage/app/public
mkdir -p /var/www/html/bootstrap/cache

# Устанавливаем правильные права доступа
chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache
chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# Устанавливаем PHP зависимости, если отсутствуют
if [ ! -f /var/www/html/vendor/autoload.php ]; then
    composer install --no-interaction --prefer-dist --no-progress
fi

# Запускаем Artisan команды только если зависимости установлены
if [ -f /var/www/html/vendor/autoload.php ]; then
    # Генерируем ключ приложения, если он не установлен
    if [ -z "$(grep '^APP_KEY=' .env | grep -v '=$')" ]; then
        php artisan key:generate
    fi

    # Запускаем миграции, если база данных доступна
    if [ "$DB_HOST" != "" ]; then
        # Ждём готовности базы данных
        until nc -z -v -w30 $DB_HOST 3306; do
          echo "Ожидание подключения к базе данных..."
          # Ждём 5 секунд перед следующей проверкой
          sleep 5
        done

        php artisan migrate --force
    fi
fi

# Выполняем переданную команду (обычно php-fpm)
exec "$@"
