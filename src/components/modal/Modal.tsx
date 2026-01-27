import type { ReactNode } from 'react';
import Image from 'next/image';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
    useLockBodyScroll(isOpen);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-1000 h-full w-full bg-white"
            onClick={onClose}
        >
            <div
                className="flex h-full w-full flex-col px-5 py-6.5 pb-10"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-4 right-8.5 flex h-11.25 w-15 items-center justify-center rounded-sm border-none bg-transparent"
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    <Image
                        src="./close-button.svg"
                        alt="close menu"
                        width={32}
                        height={32}
                        className='w-2/3 h-2/3'
                    />
                </button>

                {children}
            </div>
        </div>
    );
}
