import { lazy, Suspense } from 'react';
import Reveal from '@/components/reveal/Reveal';
import Loader from '@/components/loader/Loader';

const Standards = lazy(() => import('@/sections/standards/Standards'));

export default function Page() {
    return (
        <Suspense fallback={<Loader />}>
            <Reveal>
                <Standards />
            </Reveal>
        </Suspense>
    );
}
