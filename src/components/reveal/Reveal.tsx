'use client';

import { ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';
import styles from './reveal.module.css';

type RevealProps = {
    children: ReactNode;
    className?: string;
    rootMargin?: string;
};

export default function Reveal({
    children,
    className = '',
    rootMargin = '120px',
}: RevealProps) {
    const { ref, isVisible } = useInView<HTMLDivElement>({ rootMargin });

    return (
        <div
            ref={ref}
            className={`transition-all delay-200 duration-1200 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${className} `}
        >
            {children}
        </div>
    );
}
