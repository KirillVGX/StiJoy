import Image from 'next/image';
import Link from 'next/link';
import { mitr } from '../header/font';
import { menu } from '@/data/menu';

function StoreButton({
    img,
    title,
    link,
}: {
    img: string;
    title: string;
    link: string;
}) {
    return (
        <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-md transition hover:border-[#d4af37]/40"
        >
            <Image
                src={img}
                alt=""
                width={28}
                height={28}
            />
            <div className="text-left leading-tight">
                <span className="text-xs text-gray-400">Доступно в</span>
                <p className="text-sm font-medium text-white">{title}</p>
            </div>
        </Link>
    );
}

const titleClass = 'text-sm uppercase tracking-widest text-[#d4af37]/80';

const linkClass =
    'text-gray-400 transition hover:text-white underline-offset-4 hover:underline';

export default function Footer() {
    return (
        <footer className="mt-8 w-full rounded-t-3xl bg-linear-to-br from-[#05040d] via-[#0c0b1d] to-[#1a1638] px-10 py-14 text-sm">
            <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
                <span
                    className={`${mitr.className} text-3xl font-semibold tracking-wide text-white`}
                >
                    <span className="text-[#d4af37]">Sti</span>Joy
                </span>

                <div className="flex flex-col sm:flex-row gap-4">
                    <StoreButton
                        img="/play-market.png"
                        title="Google Play"
                        link="https://play.google.com/store/apps/details?id=com.stijoy_studio.stijoy_app&hl"
                    />
                    <StoreButton
                        img="/app-store.svg"
                        title="App Store"
                        link="https://testflight.apple.com/join/AMXN6FRX"
                    />
                </div>
            </div>

            <nav className="mt-10">
                <ul className="flex flex-wrap justify-center gap-8 text-gray-300">
                    {menu.map((item) => (
                        <li key={item.title}>
                            <Link
                                href={item.link}
                                className="transition hover:text-white"
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="my-10 h-px bg-white/10" />

            <div className="flex flex-col justify-center gap-14 md:flex-row">
                <div className="flex flex-col items-center gap-3">
                    <span className={titleClass}>Користувачам</span>
                    <Link
                        href="/delete-account"
                        className={linkClass}
                    >
                        Видалити акаунт
                    </Link>
                    <Link
                        href="/help"
                        className={linkClass}
                    >
                        Допомога
                    </Link>
                    <Link
                        href="/about-us"
                        className={linkClass}
                    >
                        Про нас
                    </Link>
                </div>

                <div className="flex flex-col items-center gap-3">
                    <span className={titleClass}>Правова інформація</span>
                    <Link
                        href="/public-agreement"
                        className={linkClass}
                    >
                        Публічна угода (ОФЕРТА)
                    </Link>
                    <Link
                        href="/standards"
                        className={linkClass}
                    >
                        Стандарти безпеки дітей
                    </Link>
                    <Link
                        href="/copyright"
                        className={linkClass}
                    >
                        Договір з авторського права
                    </Link>
                </div>
            </div>

            <div className="my-10 h-px bg-white/10" />

            <div className="flex flex-col items-center gap-2 text-xs text-gray-500">
                <p>© 2020–2026 StiJoy. Всі права захищені.</p>

                <Link
                    href="/privacy-policy"
                    className="transition hover:text-gray-300"
                >
                    Політика конфіденційності
                </Link>

                <Link
                    href="mailto:stijoy.studio@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-gray-300"
                >
                    stijoy.studio@gmail.com
                </Link>
            </div>
        </footer>
    );
}
