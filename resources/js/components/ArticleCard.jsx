export default function ArticleCard({ article }) {
    // Функция для обрезки текста
    const truncateText = (text, maxLength = 150) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength).trim() + '...';
    };

    return (
        <div className="rounded-lg bg-slate-900 border border-slate-800 p-6 hover:border-slate-700 transition-colors">
            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
            <p className="text-slate-400 mb-3">{truncateText(article.content)}</p>
            <p className="text-sm text-slate-500">
                {new Date(article.created_at).toLocaleDateString('ru-RU')}
            </p>
        </div>
    );
}
