export default function HelpForm() {
    return (
        <section className="w-full rounded-2xl bg-[#f3f4f8] py-20">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2">
                    <div>
                        <h4 className="mb-4 text-3xl font-bold text-[#c6a54a]">
                            Звʼяжіться з нами
                        </h4>

                        <p className="mb-6 max-w-md text-gray-600">
                            Не знайшли відповіді у FAQ? Залиште повідомлення —
                            ми відповімо якнайшвидше.
                        </p>

                        <a
                            href="mailto:stik.icu@gmail.com"
                            className="text-xl font-medium text-[#c6a54a] hover:underline"
                        >
                            stik.icu@gmail.com
                        </a>
                    </div>

                    <div>
                        <form className="grid gap-4">
                            <input
                                type="email"
                                placeholder="Ваш email"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-[#c6a54a] focus:outline-none"
                            />

                            <textarea
                                placeholder="Ваше питання"
                                rows={4}
                                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-[#c6a54a] focus:outline-none"
                            />

                            <button
                                type="submit"
                                className="mt-2 w-fit rounded-lg bg-[#c6a54a] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#b3923f]"
                            >
                                Надіслати
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
