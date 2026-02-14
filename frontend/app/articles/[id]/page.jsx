import Link from 'next/link';
import { getArticle } from '@/lib/api';
import CommentForm from '@/components/CommentForm';

export default async function ArticleShowPage({ params }) {
    const { id } = await params;
    let article = null;
    let error = null;

    try {
        article = await getArticle(id);
    } catch (err) {
        error = err.message;
    }

    if (error) {
        return (
            <div className="min-h-screen bg-slate-950 text-slate-100">
                <div className="mx-auto max-w-3xl px-6 py-16">
                    <div className="rounded-lg bg-red-900/20 border border-red-500 p-4">
                        <p className="text-red-400">Ошибка: {error}</p>
                    </div>
                    <Link href="/" className="mt-4 inline-block text-emerald-400 hover:text-emerald-300">
                        &larr; Вернуться к списку статей
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <div className="mx-auto max-w-3xl px-6 py-16">
                <Link href="/" className="inline-block mb-6 text-emerald-400 hover:text-emerald-300">
                    &larr; Вернуться к списку статей
                </Link>

                <article className="rounded-lg bg-slate-900 border border-slate-800 p-8">
                    <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
                    <p className="text-sm text-slate-500 mb-6">
                        {new Date(article.created_at).toLocaleDateString('ru-RU')}
                    </p>
                    <div className="text-slate-300 whitespace-pre-wrap leading-relaxed">
                        {article.content}
                    </div>
                </article>

                {article.comments && article.comments.length > 0 && (
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold mb-4 text-emerald-300">
                            Комментарии ({article.comments.length})
                        </h2>
                        <div className="flex flex-col gap-4">
                            {article.comments.map(comment => (
                                <div key={comment.id} className="rounded-lg bg-slate-900 border border-slate-800 p-4">
                                    <p className="font-semibold text-slate-200 mb-2">{comment.author_name}</p>
                                    <p className="text-slate-400">{comment.content}</p>
                                    <p className="text-sm text-slate-500 mt-2">
                                        {new Date(comment.created_at).toLocaleDateString('ru-RU')}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {(!article.comments || article.comments.length === 0) && (
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold mb-4 text-emerald-300">Комментарии</h2>
                        <p className="text-slate-400">Комментариев нет</p>
                    </div>
                )}

                <hr className="my-8 border-slate-800" />

                <CommentForm articleId={id} />
            </div>
        </div>
    );
}
