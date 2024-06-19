import {
  NewsletterItem,
  GroupedNewsletters,
} from '@/types/newsletters';

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
