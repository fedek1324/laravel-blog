# Базовый образ PHP 8.2 с FPM
FROM php:8.2-fpm

# Устанавливаем рабочую директорию
WORKDIR /var/www/html

# Устанавливаем системные зависимости
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    libzip-dev \
    nodejs \
    npm \
    netcat-traditional

# Очищаем кеш apt
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Устанавливаем PHP расширения
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip

# Копируем Composer из официального образа
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Копируем скрипт запуска контейнера
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Копируем файлы приложения
COPY . /var/www/html

# Устанавливаем зависимости и собираем фронтенд
RUN composer install --no-interaction --no-plugins --no-scripts
RUN npm install && npm run build

# Открываем порт PHP-FPM
EXPOSE 9000

# Точка входа и команда по умолчанию
ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["php-fpm"]
