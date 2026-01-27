import { lazy, Suspense } from 'react';
import Reveal from '@/components/reveal/Reveal';
import Loader from '@/components/loader/Loader';

const DeleteAccountForm = lazy(() => import('@/sections/delete-account-form/DeleteAccountForm'));

export default function Page() {
    return (
        <Suspense fallback={<Loader />}>
            <Reveal>
                <DeleteAccountForm />
            </Reveal>
        </Suspense>
    );
}
