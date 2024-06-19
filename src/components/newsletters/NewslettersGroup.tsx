import { NewsletterItem as NewsletterItemType } from '@/types/newsletters';
import NewsletterCard from './NewsletterCard';

interface NewslettersGroupProps {
  site: string;
  newsletters: NewsletterItemType[];
}

const NewslettersGroup = ({
  site,
  newsletters,
}: NewslettersGroupProps) => (
  <section aria-labelledby={`heading-${site}`} className="mb-8">
    <div className="w-fit mb-6 text-neutral-900 uppercase">
      <h2 id={`heading-${site}`} className="text-xl font-bold mb-3">
        {site}
      </h2>
      <div className="w-2/3 border-t-4 border-red-600"></div>
    </div>
    <ul className="flex flex-wrap gap-8">
      {newsletters.map((newsletter) => (
        <NewsletterCard key={newsletter.id} newsletter={newsletter} />
      ))}
    </ul>
  </section>
);

export default NewslettersGroup;
