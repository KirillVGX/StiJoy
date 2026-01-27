import { lazy, Suspense } from 'react';
import Reveal from '@/components/reveal/Reveal';
import Loader from '@/components/loader/Loader';

const FAQ = lazy(() => import('@/sections/FAQ/FAQ'));
const HelpForm = lazy(() => import('@/sections/help-form/HelpForm'));

export default function Page() {
    return (
        <Suspense fallback={<Loader />}>
            <Reveal>
                <FAQ />
            </Reveal>
            <Reveal>
                <HelpForm />
            </Reveal>
        </Suspense>
    );
}
