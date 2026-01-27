import { lazy, Suspense } from 'react';
import Reveal from '@/components/reveal/Reveal';
import Loader from '@/components/loader/Loader';

const Hero = lazy(() => import('@/sections/hero/Hero'));
const Steps = lazy(() => import('@/sections/steps/Steps'));
const Features = lazy(() => import('@/sections/features/Features'));
const FAQ = lazy(() => import('@/sections/FAQ/FAQ'));

export default function Home() {
    return (
        <Suspense fallback={<Loader />}>
            <Reveal>
                <Hero />
            </Reveal>
            <Reveal>
                <Steps />
            </Reveal>
            <Reveal>
                <Features />
            </Reveal>
            <Reveal>
                <FAQ />
            </Reveal>
        </Suspense>
    );
}
