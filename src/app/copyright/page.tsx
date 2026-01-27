import { lazy, Suspense } from 'react';
import Reveal from '@/components/reveal/Reveal';
import Loader from '@/components/loader/Loader';

const Copyright = lazy(() => import('@/sections/copyright/Copyright'));

export default function Page() {
    return (
        <Suspense fallback={<Loader />}>
            <Reveal>
                <Copyright />
            </Reveal>
        </Suspense>
    );
}
