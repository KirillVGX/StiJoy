import Image from 'next/image';

type Card = {
    id: number;
    img: string;
    title: string;
    description: string;
};

const cards: Card[] = [
    {
        id: 1,
        img: '/ipads.png',
        title: 'iPad',
        description:
            'Намалюй власний стікерпак сам або задопомоги нейронки на одну з тематик (Український гумор або Halloween) і завантаж у наш додаток',
    },
    {
        id: 2,
        img: '/phone.png',
        title: 'Чохол із принтом',
        description:
            'Зніміть відео огляд нашого мобільного додатку та опублікуйте у свій акаунт ТікТок або у youtube',
    },
    {
        id: 3,
        img: '/sticker.avif',
        title: 'Наліпки',
        description:
            'Підпишіться на наш офіційний youtube канал і на інстаграм акаунту засновника StiJoy',
    },
];

export default function Steps() {
    return (
        <section className="flex flex-col items-center rounded-2xl bg-blue-700 px-4 py-8 lg:px-8 lg:py-16">
            <h2 className="text-5xl font-bold text-gray-100">Розіграш</h2>
            <h4 className="text-xl mt-2 mb-6 text-gray-200">на честь запуску релізу</h4>
            <div className="flex flex-col md:flex-row gap-4">
                {cards.map((el) => (
                    <div
                        className="relative flex flex-1 flex-col items-center gap-4 rounded-2xl bg-white p-4 text-center shadow-2xl"
                        key={el.id}
                    >
                        <span className="absolute top-4 left-8 flex w-16 items-center justify-center rounded-full bg-[#e8e6e6] p-4 text-xl font-semibold">
                            {el.id}
                        </span>
                        <h5 className="absolute top-8 left-28 font-semibold">
                            {el.title}
                        </h5>
                        <h5 className="mt-20 block w-[90%]">
                            {el.description}
                        </h5>
                    </div>
                ))}
            </div>
        </section>
    );
}
