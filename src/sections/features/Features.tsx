'use client';

import { lazy, Suspense } from 'react';
import Reveal from '@/components/reveal/Reveal';
import Loader from '@/components/loader/Loader';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import Image from 'next/image';

const features = [
    {
        id: 1,
        title: 'У верхній частині екрану натисніть на пошук, щоб ввести назву бажаного стікерпака!',
        img: '/1.avif',
        sticker: '/sticker1.png',
    },
    {
        id: 2,
        title: 'На початковому екрані ви бачите пошук за назвою та набір стікерпаків, відсортованих за популярністю та нові. Проведіть пальцем по екрану, щоб відобразилися категорії стікерів і пошук необхідних вам стікерпаків стане ще зручніше!',
        img: '/2.avif',
        sticker: '/sticker2.png',
    },
    {
        id: 3,
        title: 'Оберіть категорію стікерпаків, яка вас цікавить, і вам буде показано список стікерпаків за обраною тематикою!',
        img: '/3.avif',
        sticker: '/sticker3.jpeg',
    },
    {
        id: 4,
        title: 'Натисніть на будь-який стікерпак у списку, і відкриється вікно з повною інформацією про цей стікерпак, та його стікери.',
        img: '/4.avif',
        sticker: '/sticker4.jpg',
    },
    {
        id: 5,
        title: 'У вікні інформації про стікерпак ви можете обрати одну з трьох кнопок (Viber, Telegram, Odnoklassniki), щоб додати його до свого облікового запису.',
        img: '/5.avif',
        sticker: '/sticker5.png',
    },
    {
        id: 6,
        title: 'Клацніть на будь-який стікер із цього набору, щоб переглянути його у повноекранному режимі.',
        img: '/6.avif',
        sticker: '/sticker6.jpg',
    },
    {
        id: 7,
        title: 'У режимі попереднього перегляду стікера ви можете завантажити його на свій пристрій.',
        img: '/7.avif',
        sticker: '/sticker7.jpg',
    },
    {
        id: 8,
        title: 'У вікні з інформацією про стікерпак натисніть на значок трьох крапок у верхньому правому куті, щоб надіслати скаргу на стікерпак у разі виявлення порушень.',
        img: '/8.avif',
        sticker: '/sticker8.png',
    },
    {
        id: 9,
        title: 'У формі для подання жалоби ви зможете вказати причину і детально описати суть порушення.',
        img: '/9.avif',
        sticker: '/sticker9.png',
    },
];

export default function Features() {
    const isMobile = useMediaQuery('(max-width: 1024px)');

    return (
        <section className="flex w-full flex-col gap-6 lg:gap-12 xl:gap-24">
            <h2 className="mx-auto text-center text-3xl font-normal md:-mb-4 md:text-5xl lg:-mb-8">
                Як{' '}
                <span className="font-bold text-[#5cbf2e]">користуватися</span>{' '}
                додатком{' '}
                <span className="font-semibold text-[#ffaa00]">StiJoy</span>
            </h2>
            <Suspense fallback={<Loader />}>
                {features.map((el) => (
                    <Reveal key={el.id}>
                        <div
                            className={`flex gap-4 lg:gap-10 xl:gap-20 ${el.id % 2 === 1 ? 'flex-row-reverse' : ''}`}
                        >
                            {!isMobile && (
                                <Image
                                    src={el.sticker}
                                    alt="Sticker"
                                    width={400}
                                    height={200}
                                />
                            )}
                            <div
                                className={`relative flex w-175 flex-col items-center gap-4 rounded-3xl border border-gray-200 p-9 shadow-2xl md:flex-row lg:gap-8 xl:gap-20 ${el.id % 2 === 1 ? 'ml-auto text-right md:flex-row-reverse' : ''} `}
                            >
                                <span
                                    className={`rounded-full bg-[#ffaa00] px-8 py-4 text-xl font-bold text-white shadow-[0_0_20px_rgba(0,0,0,0.6)] shadow-amber-400 sm:absolute sm:top-8 ${el.id % 2 === 1 ? 'right-auto left-4' : 'right-4'} `}
                                >
                                    Крок {el.id}
                                </span>
                                <Image
                                    src={el.img}
                                    alt="Instruction"
                                    width={300}
                                    height={500}
                                />

                                <p className="mt-auto mb-4 block text-center lg:text-sm xl:mb-16 xl:w-2xs xl:text-base">
                                    {el.title}
                                </p>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </Suspense>
        </section>
    );
}
