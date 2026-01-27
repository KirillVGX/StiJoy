'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { mitr } from './font';
import { menu } from '@/data/menu';
import Modal from '@/components/modal/Modal';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const isMobile = useMediaQuery('(max-width: 768px)');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 w-full rounded-b-md transition-all duration-300 ${
                scrolled
                    ? 'border-b border-black/5 bg-white/70 shadow-md backdrop-blur-xl'
                    : 'bg-transparent'
            } `}
        >
            <div className="mx-auto flex items-center justify-between px-6 py-4">
                <span
                    className={`${mitr.className} text-2xl font-semibold tracking-wide text-gray-900 xl:text-[38px]`}
                >
                    <span className="text-[#d4af37]">Sti</span>Joy.com
                </span>

                {!isMobile ? (
                    <ul className="flex items-center gap-6">
                        {menu.map((item) => (
                            <li key={item.title}>
                                {item.title === 'Новини' ? (
                                    <Link
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="relative text-sm font-medium tracking-wide text-gray-600 transition after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#d4af37] after:transition-all hover:text-gray-900 hover:after:w-full">
                                            {item.title}
                                        </span>
                                    </Link>
                                ) : (
                                    <Link href={item.link}>
                                        <span className="relative text-sm font-medium tracking-wide text-gray-600 transition after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#d4af37] after:transition-all hover:text-gray-900 hover:after:w-full">
                                            {item.title}
                                        </span>
                                    </Link>
                                )}
                            </li>
                        ))}

                        <Link
                            href="https://t.me/Zhyask_Official"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-black/10 transition hover:border-[#d4af37]"
                        >
                            <Image
                                src="/telegram.png"
                                alt=""
                                width={36}
                                height={36}
                            />
                        </Link>

                        <Link
                            href="https://www.instagram.com/zhyask/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer rounded-full border border-black/10 transition hover:border-[#d4af37]"
                        >
                            <Image
                                src="/instagram.png"
                                alt=""
                                width={36}
                                height={36}
                            />
                        </Link>
                    </ul>
                ) : (
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10"
                    >
                        <Image
                            src="/burger-icon.svg"
                            alt=""
                            width={20}
                            height={20}
                        />
                    </button>
                )}

                <Modal
                    isOpen={isMenuOpen}
                    onClose={() => setIsMenuOpen(false)}
                >
                    <span
                        className={`${mitr.className} text-2xl font-semibold tracking-wide absolute top-5 left-11 text-gray-900 xl:text-[38px]`}
                    >
                        <span className="text-[#d4af37]">Sti</span>Joy.com
                    </span>
                    <ul className="mt-[30%] flex flex-col items-center gap-6">
                        {menu.map((item) => (
                            <li key={item.title}>
                                <Link href={item.link}>
                                    <span className="relative text-2xl font-medium tracking-wide text-gray-900">
                                        {item.title}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Modal>
            </div>
        </header>
    );
}
