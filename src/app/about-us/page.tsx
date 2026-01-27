import { lazy, Suspense } from 'react';
import Reveal from '@/components/reveal/Reveal';
import Loader from '@/components/loader/Loader';

const About = lazy(() => import('@/sections/about/About'));
const OurTeam = lazy(() => import('@/sections/our-team/Ourteam'));

export default function Page() {
    return (
        <Suspense fallback={<Loader />}>
            <Reveal>
                <About />
            </Reveal>
            <Reveal>
                <OurTeam />
            </Reveal>
        </Suspense>
    );
}
