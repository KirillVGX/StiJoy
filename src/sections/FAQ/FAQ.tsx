'use client';

import { Accordion } from '@/components/accordion/Accordion';
import { questions } from '@/data/FAQ';
import { useState } from 'react';

type Iprops = {
    text: string;
};

function Selector({ text }: Iprops) {
    return <span className="text-4xl text-[#5cbf2e]">{text}</span>;
}

export default function FAQ() {
    const [openId, setOpenId] = useState<number | null>(null);

    const toggle = (id: number) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <section className="flex w-full flex-col items-center gap-4 rounded-xl bg-blue-700 p-6 lg:flex-row lg:items-start lg:p-12 xl:rounded-2xl">
            <div className="">
                <h3 className="mb-4 w-[80vw] text-center text-3xl font-bold text-white sm:w-100 lg:w-2xs lg:text-start">
                    <Selector text="F" />
                    requently
                    <br /> <Selector text="A" />
                    sked
                    <br /> <Selector text="Q" />
                    uestions
                </h3>
                <p className="w-[80vw] text-center text-lg text-amber-100 sm:w-100 lg:text-start">
                    Не можете знайти потрібну відповідь? Зверніться до нашої
                    служби підтримки клієнтів.
                </p>
            </div>
            <div className="flex flex-col gap-5">
                {questions.map((item) => (
                    <Accordion
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        content={item.answer}
                        isOpen={openId === item.id}
                        onToggle={toggle}
                    />
                ))}
            </div>
        </section>
    );
}
