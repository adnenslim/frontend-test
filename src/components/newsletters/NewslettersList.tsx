import { GroupedNewsletters } from '@/types/newsletters';
import NewslettersGroup from './NewslettersGroup';

interface NewslettersListProps {
  groupedNewsletters: GroupedNewsletters;
}

const NewslettersList: React.FC<NewslettersListProps> = ({
  groupedNewsletters,
}) => (
  <>
    {Object.keys(groupedNewsletters).map((site) => (
      <NewslettersGroup
        key={site}
        site={site}
        newsletters={groupedNewsletters[site]}
      />
    ))}
  </>
);

export default NewslettersList;
