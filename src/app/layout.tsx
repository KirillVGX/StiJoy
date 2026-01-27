import Header from '@/sections/header/Header';
import './globals.css';
import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import Footer from '@/sections/footer/Footer';

const poppins = localFont({
    src: [
        {
            path: './fonts/Poppins-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/Poppins-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: './fonts/Poppins-SemiBold.woff2',
            weight: '600',
            style: 'normal',
        },
        { path: './fonts/Poppins-Bold.woff2', weight: '700', style: 'normal' },
    ],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Stijoy Стікери для Вайберу',
    description: 'Короткое описание сайта',
    icons: {
        icon: '/icon.png',
        apple: '/apple-touch-icon.png',
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="uk">
            <body
                className={`bg-linear-to-br from-white via-violet-50 to-indigo-50 ${poppins.className}`}
            >
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
