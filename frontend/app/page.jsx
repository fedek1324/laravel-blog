import Link from 'next/link';
import ArticleCard from '@/components/ArticleCard';
import { getArticles } from '@/lib/api';

export default async function ArticlesListPage() {
    let articles = [];
    let error = null;

    try {
        articles = await getArticles();
    } catch (err) {
        error = err.message;
    }

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <div className="mx-auto flex max-w-3xl flex-col gap-4 px-6 py-16">
                <div className="flex items-center justify-between gap-4">
                    <h1 className="text-4xl font-semibold">
                        Статьи
                    </h1>
                    <Link
                        href="/articles/create"
                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors font-medium whitespace-nowrap"
                    >
                        Создать статью
                    </Link>
                </div>

                {error && (
                    <div className="rounded-lg bg-red-900/20 border border-red-500 p-4">
                        <p className="text-red-400">Ошибка: {error}</p>
                    </div>
                )}

                {!error && articles.length > 0 && (
                    <div className="flex flex-col gap-4 mt-8">
                        <h2 className="text-2xl font-semibold text-emerald-300">Статьи</h2>
                        {articles.map(article => (
                            <ArticleCard key={article.id} article={article} />
                        ))}
                    </div>
                )}

                {!error && articles.length === 0 && (
                    <p className="text-slate-400">Статей пока нет</p>
                )}
            </div>
        </div>
    );
}
