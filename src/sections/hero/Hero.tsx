import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="flex flex-col rounded-xl bg-linear-to-tr from-white via-indigo-100 to-white py-4 xl:h-[calc(100vh-60px)] xl:max-h-240 xl:w-full xl:flex-row xl:gap-10 xl:rounded-3xl xl:px-10">
            <div className="flex flex-1 flex-col items-center gap-4 text-center xl:justify-center">
                <h1 className="text-2xl font-semibold xl:text-6xl">
                    Стікери для <span className="text-[#ffaa00]">Viber</span> —
                    <br />
                    завантажити безкоштовно{' '}
                    <span className="text-[#5cbf2e]">| StiJoy</span>
                </h1>
                <h5 className="w-3/4 text-sm text-gray-800 xl:ml-20 xl:w-1/2 xl:text-justify xl:text-base">
                    Велика колекція яскравих і анімованих стікерів для Viber.
                    Завантажуй безкоштовно, оновлюй чати та виражай емоції разом
                    зі StiJoy.
                </h5>
                <div className="flex flex-col gap-4 xl:mt-4 xl:mr-18 xl:flex-row xl:justify-center">
                    <Link
                        href="https://play.google.com/store/apps/details?id=com.stijoy_studio.stijoy_app&hl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex cursor-pointer items-center gap-1 rounded-lg border-2 border-gray-400 bg-black py-2 pr-3 pl-2 transition-colors duration-300 hover:bg-black/80"
                    >
                        <Image
                            src="/play-market.png"
                            alt=""
                            width={16}
                            height={16}
                            className="aspect-square h-10 w-10"
                        />
                        <div className="text-start">
                            <h6 className="text-sm text-gray-100">
                                Доступно в
                            </h6>
                            <h3 className="text-xl font-semibold text-gray-100">
                                Google Play
                            </h3>
                        </div>
                    </Link>
                    <Link
                        href="https://testflight.apple.com/join/AMXN6FRX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex cursor-pointer items-center rounded-lg border-2 border-gray-400 bg-black py-2 pr-3 pl-2 transition-colors duration-300 hover:bg-black/80"
                    >
                        <Image
                            src="/app-store.svg"
                            alt=""
                            width={16}
                            height={16}
                            className="aspect-square h-10 w-10"
                        />
                        <div className="text-start">
                            <h6 className="text-sm text-gray-100">
                                Доступно в
                            </h6>
                            <h3 className="text-xl font-semibold text-gray-100">
                                App Store
                            </h3>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="mx-auto flex-1">
                <Image
                    src="/hero.png"
                    alt="Our app"
                    width={800}
                    height={800}
                />
            </div>
        </section>
    );
}
