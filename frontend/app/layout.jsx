import './globals.css';

export const metadata = {
    title: 'Laravel Blog',
    description: 'Блог на Laravel и Next.js',
};

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
