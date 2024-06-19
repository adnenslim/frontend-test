import { NextRequest, NextResponse } from 'next/server';
import { NEWSLETTER_ITEMS } from '@/mocks/newsletters';
import { GroupedNewsletters } from '@/types/newsletters';
import { groupNewslettersBySite } from '@/utils/newsletters-utils';

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const items = await Promise.resolve(NEWSLETTER_ITEMS);
    const groupedNewsletters: GroupedNewsletters =
      groupNewslettersBySite(items);

    return NextResponse.json(groupedNewsletters);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
