import { GroupedNewsletters } from '@/types/newsletters';

export const fetchGroupedNewsletters =
  async (): Promise<GroupedNewsletters> => {
    const response = await fetch(
      'http://localhost:3000/api/grouped-newsletters'
    );
    if (!response.ok) {
      throw new Error('Failed to fetch newsletters');
    }
    return await response.json();
  };
