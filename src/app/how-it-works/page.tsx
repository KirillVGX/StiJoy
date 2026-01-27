import { lazy, Suspense } from 'react';
import Reveal from '@/components/reveal/Reveal';
import Loader from '@/components/loader/Loader';

const Features = lazy(() => import('@/sections/features/Features'));

export default function Page() {
    return (
        <Suspense fallback={<Loader />}>
            <Reveal>
                <Features />
            </Reveal>
        </Suspense>
    );
}
