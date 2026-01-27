import { lazy, Suspense } from 'react';
import Reveal from '@/components/reveal/Reveal';
import Loader from '@/components/loader/Loader';

const PublicAgreement = lazy(() => import('@/sections/public-agreement/PublicAgreement'));

export default function Page() {
    return (
        <Suspense fallback={<Loader />}>
            <Reveal>
                <PublicAgreement />
            </Reveal>
        </Suspense>
    );
}
