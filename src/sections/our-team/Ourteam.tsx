import { persons } from '@/data/persons';
import Image from 'next/image';
import Link from 'next/link';

export default function OurTeam() {
    return (
        <section className="relative flex flex-col items-center overflow-hidden rounded-3xl bg-linear-to-br from-[#05040d] via-[#0c0b1d] to-[#1a1638] px-12 py-28">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.15),transparent_60%)]" />

            <h2 className="relative mb-4 text-center text-4xl font-semibold tracking-wide text-[#d4af37]">
                Засновники проєкту
            </h2>

            <p className="relative mb-16 max-w-2xl text-center text-gray-400">
                Ми створюємо продукт преміального рівня, де кожна деталь має
                значення — від дизайну до стабільності.
            </p>

            <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
                {persons.map((person) => (
                    <div
                        key={person.id}
                        className="group flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#d4af37]/40"
                    >
                        <div className="relative mb-6">
                            <Image
                                src={person.img}
                                alt={person.name}
                                width={150}
                                height={150}
                                className="rounded-full ring-2 ring-[#d4af37]/40 transition duration-500 group-hover:ring-[#d4af37]"
                            />
                        </div>

                        <h4 className="text-lg font-medium tracking-wide text-white">
                            {person.name}
                        </h4>

                        <span className="mt-1 text-sm tracking-widest text-[#d4af37] uppercase">
                            {person.status}
                        </span>

                        <p className="mt-4 text-center text-sm leading-relaxed text-gray-400">
                            {person.info}
                        </p>

                        <div className="mt-6 flex gap-2">
                            {person.contacts.map((contact, index) => (
                                <Link
                                    key={index}
                                    href={contact.link}
                                    className="transition duration-300 hover:scale-110"
                                >
                                    <Image
                                        src={contact.icon}
                                        alt={`${person.name} social`}
                                        width={32}
                                        height={32}
                                        className="opacity-70 hover:opacity-100"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
