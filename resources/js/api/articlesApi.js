/**
 * API слой для работы со статьями
 */

const API_BASE_URL = '/api';

/**
 * Получить все статьи
 * @param {AbortSignal} signal - сигнал для отмены запроса
 * @returns {Promise<Array>}
 */
export const getArticles = async (signal) => {
    const response = await fetch(`${API_BASE_URL}/articles`, { signal });

    if (!response.ok) {
        throw new Error('Ошибка при загрузке статей');
    }

    return response.json();
};

/**
 * Получить одну статью по ID
 * @param {number|string} id - ID статьи
 * @param {AbortSignal} signal - сигнал для отмены запроса
 * @returns {Promise<Object>}
 */
export const getArticle = async (id, signal) => {
    const response = await fetch(`${API_BASE_URL}/articles/${id}`, { signal });

    if (!response.ok) {
        throw new Error('Ошибка при загрузке статьи');
    }

    return response.json();
};

/**
 * Создать новую статью
 * @param {Object} data - данные статьи
 * @param {string} data.title - заголовок
 * @param {string} data.content - содержание
 * @param {AbortSignal} signal - сигнал для отмены запроса
 * @returns {Promise<Object>}
 */
export const createArticle = async (data, signal) => {
    const response = await fetch(`${API_BASE_URL}/articles`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        signal,
    });

    if (!response.ok) {
        throw new Error('Ошибка при создании статьи');
    }

    return response.json();
};

/**
 * Обновить статью
 * @param {number|string} id - ID статьи
 * @param {Object} data - данные для обновления
 * @param {AbortSignal} signal - сигнал для отмены запроса
 * @returns {Promise<Object>}
 */
export const updateArticle = async (id, data, signal) => {
    const response = await fetch(`${API_BASE_URL}/articles/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        signal,
    });

    if (!response.ok) {
        throw new Error('Ошибка при обновлении статьи');
    }

    return response.json();
};

/**
 * Удалить статью
 * @param {number|string} id - ID статьи
 * @param {AbortSignal} signal - сигнал для отмены запроса
 * @returns {Promise<Object>}
 */
export const deleteArticle = async (id, signal) => {
    const response = await fetch(`${API_BASE_URL}/articles/${id}`, {
        method: 'DELETE',
        signal,
    });

    if (!response.ok) {
        throw new Error('Ошибка при удалении статьи');
    }

    return response.json();
};
