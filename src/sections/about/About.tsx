export default function About() {
    return (
        <section className="flex justify-center px-4 py-20">
            <div className="w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-xl backdrop-blur-md md:p-14">
                <h2 className="text-4xl font-semibold tracking-tight text-gray-800 md:text-5xl">
                    Про нас
                </h2>
                <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-linear-to-r from-yellow-400 to-yellow-600" />

                <p className="mt-8 text-lg leading-relaxed text-gray-700">
                    Кожен проєкт починається з ідеї, і наш — не виняток. Ми
                    живемо в епоху месенджерів, де яскраві та виразні стікери
                    стали невід’ємною частиною спілкування. Telegram, ВКонтакте,
                    Одноклассники пропонують величезні колекції, тоді як Viber
                    довгий час залишався з обмеженим вибором.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-gray-700">
                    У 2020 році ми вирішили змінити це. Наш проєкт об’єднав
                    естетику, зручність і функціональність, щоб перетворити
                    Viber на простір самовираження. Сьогодні StiJoy — це не
                    просто бібліотека стікерів, а платформа для творчості, де
                    кожен може створювати, публікувати та надихати інших.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-gray-700">
                    Ми віримо, що комунікація має бути живою та емоційною, а
                    мистецтво — доступним для всіх. Саме тому наш проєкт
                    створений, щоб об’єднувати людей і дарувати радість.
                </p>
            </div>
        </section>
    );
}
