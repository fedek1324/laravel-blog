import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArticlesList from './pages/ArticlesList';
import ArticleShow from './pages/ArticleShow';

export default function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ArticlesList />} />
                <Route path="/articles/:id" element={<ArticleShow />} />
            </Routes>
        </BrowserRouter>
    );
}
