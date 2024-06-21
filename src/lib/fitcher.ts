import { GroupedNewsletters } from '@/types/newsletters';

export const fetchGroupedNewsletters =
  async (): Promise<GroupedNewsletters> => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/grouped-newsletters`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch newsletters');
    }
    return await response.json();
  };
