import {
  USER_WITH_ONE_SUBSCRIPTION,
  USER_WITH_MULTIPLE_SUBSCRIPTION,
  USER_WITHOUT_SUBSCRIPTION,
} from '@/mocks/user';
import { NewsletterItem as NewsletterItemType } from '@/types/newsletters';
import NewsletterImage from './NewsletterImage';
import {
  getRandomRight,
  userHasAccess,
} from '@/utils/newsletters-utils';

interface NewsletterItemProps {
  newsletter: NewsletterItemType;
}

const currentUser = getRandomRight();

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
    <button
      className={`w-[123px] h-[40px] rounded-3xl text-sm font-bold ${
        userHasAccess(currentUser, newsletter)
          ? 'bg-lesEchos-primary text-white hover:bg-red-700'
          : 'bg-subscriptionYellow text-neutral-900 hover:bg-yellow-500'
      } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        userHasAccess(currentUser, newsletter)
          ? 'focus:ring-red-500'
          : 'focus:ring-yellow-500'
      }`}
    >
      {userHasAccess(currentUser, newsletter)
        ? "S'inscrire"
        : "S'abonner"}
    </button>
  </li>
);

export default NewsletterItem;
