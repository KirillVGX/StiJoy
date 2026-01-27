export default function DeleteAccountForm() {
    return (
        <section className="w-full rounded-2xl bg-[#f3f4f8] py-20">
            <div className="mx-auto max-w-6xl px-6">
                <div className="max-w-2xl">
                    <h4 className="mb-6 text-3xl font-bold text-[#c6a54a]">
                        Видалення акаунту
                    </h4>

                    <p className="mb-8 text-gray-600">
                        Вкажіть електронну адресу та Nickname для видалення
                        акаунту з мобільного додатку{' '}
                        <span className="font-medium text-[#c6a54a]">
                            “Stijoy.com Стікери”
                        </span>
                    </p>

                    <form className="grid gap-4">
                        <input
                            type="email"
                            placeholder="Ваш email"
                            required
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-[#c6a54a] focus:outline-none"
                        />

                        <input
                            type="text"
                            placeholder="Нікнейм"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-[#c6a54a] focus:outline-none"
                        />

                        <button
                            type="submit"
                            className="mt-2 w-fit rounded-lg bg-[#c6a54a] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#b3923f]"
                        >
                            Видалити
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
