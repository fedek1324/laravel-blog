import './bootstrap';
import { createRoot } from 'react-dom/client';
import Main from './Main';

const rootElement = document.getElementById('app');

if (rootElement) {
    createRoot(rootElement).render(<Main />);
}
