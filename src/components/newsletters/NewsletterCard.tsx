import { NewsletterItem as NewsletterItemType } from '@/types/newsletters';
import NewsletterImage from './NewsletterImage';

interface NewsletterItemProps {
  newsletter: NewsletterItemType;
}

const NewsletterItem = ({ newsletter }: NewsletterItemProps) => (
  <li
    className="flex flex-col items-center w-full sm:w-[calc(50%-16px)] lg:w-[302px]"
    role="region"
  >
    <NewsletterImage
      title={newsletter.title}
      image={newsletter.image}
    />
    <p className="mb-4 flex-grow text-center font-source-sans-pro text-neutral-900">
      {newsletter.description}
    </p>
    <button className="w-[123px] h-[40px] rounded-3xl bg-subscriptionYellow">
      S'abonner
    </button>
  </li>
);

export default NewsletterItem;
