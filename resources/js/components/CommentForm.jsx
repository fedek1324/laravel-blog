import { useState } from 'react';
import { createComment } from '../api/articlesApi';

export default function CommentForm({ articleId, onCommentAdded }) {
    const [formData, setFormData] = useState({
        author_name: '',
        content: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const abortController = new AbortController();

        try {
            const newComment = await createComment(articleId, formData, abortController.signal);
            setFormData({ author_name: '', content: '' });
            if (onCommentAdded) {
                onCommentAdded(newComment);
            }
        } catch (err) {
            if (err.name !== 'AbortError') {
                setError(err.message);
            }
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-emerald-300">Добавить комментарий</h3>

            {error && (
                <div className="rounded-lg bg-red-900/20 border border-red-500 p-4 mb-4">
                    <p className="text-red-400">Ошибка: {error}</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="author_name" className="text-sm font-medium text-slate-300">
                        Ваше имя
                    </label>
                    <input
                        type="text"
                        id="author_name"
                        name="author_name"
                        value={formData.author_name}
                        onChange={handleChange}
                        required
                        maxLength={255}
                        className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors"
                        placeholder="Введите ваше имя"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="content" className="text-sm font-medium text-slate-300">
                        Комментарий
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                        placeholder="Введите ваш комментарий"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="self-start px-6 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white rounded-lg transition-colors font-medium"
                >
                    {loading ? 'Отправка...' : 'Отправить комментарий'}
                </button>
            </form>
        </div>
    );
}
