'use client';

import Image from 'next/image';
import styles from './accordion.module.css';

type AccordionProps = {
    id: number;
    title: string;
    content: React.ReactNode;
    isOpen: boolean;
    onToggle: (id: number) => void;
};

export function Accordion({
    id,
    title,
    content,
    isOpen,
    onToggle,
}: AccordionProps) {
    return (
        <div
            className={`w-full cursor-pointer rounded-xl bg-slate-100 transition-colors duration-500`}
            onClick={() => onToggle(id)}
        >
            <div
                className={`flex items-center justify-between rounded-xl px-5 py-5 text-lg transition-colors duration-700 ${isOpen ? 'bg-[#ffb116] shadow-[0_0_10px_rgba(0,0,0,0.6)] shadow-amber-400' : 'bg-[#ffffff]'} `}
            >
                <p className={`${isOpen ? 'text-white' : 'text-gray-700'}`}>
                    {title}
                </p>

                <span
                    className={`relative flex aspect-square h-6 items-center justify-center rounded-full border-2 text-black transition-all ${isOpen ? 'rotate-180' : ''} `}
                >
                    <Image
                        src="/arrow.svg"
                        alt=""
                        width={14}
                        height={14}
                        className={`pointer-events-none object-contain ${isOpen ? 'mb-0.75' : ''}`}
                    />
                </span>
            </div>

            <div
                className={`grid overflow-hidden transition-all duration-500 ${
                    isOpen
                        ? 'grid-rows-[1fr] px-10 pt-6 pb-7.5 text-slate-900'
                        : 'grid-rows-[0fr] px-10'
                }`}
            >
                <div className="overflow-hidden">{content}</div>
            </div>
        </div>
    );
}
