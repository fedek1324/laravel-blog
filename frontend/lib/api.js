const SERVER_API_BASE = process.env.INTERNAL_API_URL || 'http://webserver:8080/api';
const CLIENT_API_BASE = '/api';

function getBaseUrl() {
    return typeof window === 'undefined' ? SERVER_API_BASE : CLIENT_API_BASE;
}

const JSON_HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

async function handleResponse(res, errorMsg) {
    if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.message || errorMsg);
    }
    return res.json();
}

export async function getArticles() {
    const res = await fetch(`${getBaseUrl()}/articles`, {
        headers: { 'Accept': 'application/json' },
        cache: 'no-store',
    });
    return handleResponse(res, 'Ошибка при загрузке статей');
}

export async function getArticle(id) {
    const res = await fetch(`${getBaseUrl()}/articles/${id}`, {
        headers: { 'Accept': 'application/json' },
        cache: 'no-store',
    });
    return handleResponse(res, 'Ошибка при загрузке статьи');
}

export async function createArticle(data) {
    const res = await fetch(`${getBaseUrl()}/articles`, {
        method: 'POST',
        headers: JSON_HEADERS,
        body: JSON.stringify(data),
    });
    return handleResponse(res, 'Ошибка при создании статьи');
}

export async function createComment(articleId, data) {
    const res = await fetch(`${getBaseUrl()}/articles/${articleId}/comments`, {
        method: 'POST',
        headers: JSON_HEADERS,
        body: JSON.stringify(data),
    });
    return handleResponse(res, 'Ошибка при добавлении комментария');
}
