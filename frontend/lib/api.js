const SERVER_API_BASE = process.env.INTERNAL_API_URL || 'http://webserver:8080/api';
const CLIENT_API_BASE = '/api';

function getBaseUrl() {
    return typeof window === 'undefined' ? SERVER_API_BASE : CLIENT_API_BASE;
}

export async function getArticles() {
    const res = await fetch(`${getBaseUrl()}/articles`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Ошибка при загрузке статей');
    return res.json();
}

export async function getArticle(id) {
    const res = await fetch(`${getBaseUrl()}/articles/${id}`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Ошибка при загрузке статьи');
    return res.json();
}

export async function createArticle(data) {
    const res = await fetch(`${getBaseUrl()}/articles`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Ошибка при создании статьи');
    return res.json();
}

export async function createComment(articleId, data) {
    const res = await fetch(`${getBaseUrl()}/articles/${articleId}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Ошибка при добавлении комментария');
    return res.json();
}
