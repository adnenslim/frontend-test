import { Header } from '@/components/newsletters/NewslettersHeader';
import { fetchGroupedNewsletters } from '@/lib/fitcher';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Suspense } from 'react';

const NewslettersList = dynamic(
  () => import('@/components/newsletters/NewslettersList'),
  {
    suspense: true,
  }
);

export default async function Home() {
  const groupedNewsletters = await fetchGroupedNewsletters();
  return (
    <main className="px-8 flex justify-center">
      <div className="lg:w-[970px]">
        <Header />
        <Suspense fallback={<div>Loading newsletters...</div>}>
          <NewslettersList groupedNewsletters={groupedNewsletters} />
        </Suspense>
      </div>
    </main>
  );
}
