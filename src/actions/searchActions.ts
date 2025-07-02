'use server';

import { getStrapiList } from '@/lib/utils/getStrapiList';
import { searchArticlesQuery } from '@/lib/queries/searchArticlesQuery';

export async function submitSearch(formData: FormData) {
  const query = formData.get('query');
  return getStrapiList('articles', searchArticlesQuery(query as string));
}
