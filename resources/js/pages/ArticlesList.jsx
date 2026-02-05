import { useState, useEffect } from 'react';
import ArticleCard from '../components/ArticleCard';
import { getArticles } from '../api/articlesApi';

export default function ArticlesList() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        getArticles(abortController.signal)
            .then(data => {
                setArticles(data);
                setLoading(false);
            })
            .catch(err => {
                if (err.name !== 'AbortError') {
                    setError(err.message);
                    setLoading(false);
                }
            });

        return () => {
            abortController.abort();
        };
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <div className="mx-auto flex max-w-3xl flex-col gap-4 px-6 py-16">
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">
                    Laravel + React
                </p>
                <h1 className="text-4xl font-semibold">
                    React установлен и готов к работе
                </h1>

                {loading && (
                    <p className="text-slate-400">Загрузка статей...</p>
                )}

                {error && (
                    <div className="rounded-lg bg-red-900/20 border border-red-500 p-4">
                        <p className="text-red-400">Ошибка: {error}</p>
                    </div>
                )}

                {!loading && !error && articles.length > 0 && (
                    <div className="flex flex-col gap-4 mt-8">
                        <h2 className="text-2xl font-semibold text-emerald-300">Статьи</h2>
                        {articles.map(article => (
                            <ArticleCard key={article.id} article={article} />
                        ))}
                    </div>
                )}

                {!loading && !error && articles.length === 0 && (
                    <p className="text-slate-400">Статей пока нет</p>
                )}
            </div>
        </div>
    );
}
