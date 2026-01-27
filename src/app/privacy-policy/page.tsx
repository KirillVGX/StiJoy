import { lazy, Suspense } from 'react';
import Reveal from '@/components/reveal/Reveal';
import Loader from '@/components/loader/Loader';

const PrivacyPolicy = lazy(() => import('@/sections/privacy-policy/PrivacyPolicy'));

export default function Page() {
    return (
        <Suspense fallback={<Loader />}>
            <Reveal>
                <PrivacyPolicy />
            </Reveal>
        </Suspense>
    );
}
