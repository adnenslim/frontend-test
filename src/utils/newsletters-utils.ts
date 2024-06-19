import {
  USER_WITHOUT_SUBSCRIPTION,
  USER_WITH_MULTIPLE_SUBSCRIPTION,
  USER_WITH_ONE_SUBSCRIPTION,
} from '@/mocks/user';
import {
  NewsletterItem,
  GroupedNewsletters,
} from '@/types/newsletters';
import { User } from '@/types/user';

export const groupNewslettersBySite = (
  newsletters: NewsletterItem[]
): GroupedNewsletters => {
  return newsletters.reduce<GroupedNewsletters>(
    (acc, { site, ...newsletter }) => {
      if (!acc[site]) {
        acc[site] = [];
      }
      acc[site].push({ site, ...newsletter });
      return acc;
    },
    {}
  );
};

export const userHasAccess = (
  user: User,
  newsletter: NewsletterItem
): boolean => {
  if (newsletter.subscriptions.length === 0) {
    return true; // Accessible to everyone
  }
  return newsletter.subscriptions.some((sub) =>
    user.subscriptions.includes(sub)
  );
};

const userArray = [
  USER_WITH_ONE_SUBSCRIPTION,
  USER_WITH_MULTIPLE_SUBSCRIPTION,
  USER_WITHOUT_SUBSCRIPTION,
];

export const getRandomRight = () => {
  const randomIndex = Math.floor(Math.random() * userArray.length);
  return userArray[randomIndex];
};
