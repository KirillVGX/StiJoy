import FAQ from '@/sections/FAQ/FAQ';
import Features from '@/sections/features/Features';
import Hero from '@/sections/hero/Hero';
import Steps from '@/sections/steps/Steps';

export default function Home() {
    return (
        <>
            <Hero />
            <Steps />
            <Features />
            <FAQ />
        </>
    );
}
