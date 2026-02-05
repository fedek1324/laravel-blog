import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArticlesList from './pages/ArticlesList';
import ArticleShow from './pages/ArticleShow';
import ArticleCreate from './pages/ArticleCreate';

export default function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ArticlesList />} />
                <Route path="/articles/create" element={<ArticleCreate />} />
                <Route path="/articles/:id" element={<ArticleShow />} />
            </Routes>
        </BrowserRouter>
    );
}
