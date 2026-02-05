import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createArticle } from '../api/articlesApi';

export default function ArticleCreate() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
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
            await createArticle(formData, abortController.signal);
            navigate('/');
        } catch (err) {
            if (err.name !== 'AbortError') {
                setError(err.message);
                setLoading(false);
            }
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
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <div className="mx-auto max-w-3xl px-6 py-16">
                <Link to="/" className="inline-block mb-6 text-emerald-400 hover:text-emerald-300">
                    ← Вернуться к списку статей
                </Link>

                <h1 className="text-4xl font-semibold mb-8">Создать новую статью</h1>

                {error && (
                    <div className="rounded-lg bg-red-900/20 border border-red-500 p-4 mb-6">
                        <p className="text-red-400">Ошибка: {error}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="title" className="text-sm font-medium text-slate-300">
                            Заголовок
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            maxLength={255}
                            className="px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors"
                            placeholder="Введите заголовок статьи"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="content" className="text-sm font-medium text-slate-300">
                            Содержание
                        </label>
                        <textarea
                            id="content"
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                            required
                            rows={10}
                            className="px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                            placeholder="Введите содержание статьи"
                        />
                    </div>

                    <div className="flex gap-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white rounded-lg transition-colors font-medium"
                        >
                            {loading ? 'Создание...' : 'Создать статью'}
                        </button>
                        <Link
                            to="/"
                            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors font-medium"
                        >
                            Отмена
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
