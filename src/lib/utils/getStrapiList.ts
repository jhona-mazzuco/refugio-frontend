import { StrapiListResponse } from '@/lib/models/StrapiListResponse';

export async function getStrapiList<T>(url: string, queryParams?: string) {
  const response = await fetch(
    `${process.env['NEXT_PUBLIC_STRAPI_URL']}/${url}?${queryParams}`,
    {
      next: { revalidate: 60 },
      headers: {
        Authorization: `Bearer ${process.env['NEXT_PUBLIC_STRAPI_TOKEN']}`,
      },
    },
  );

  if (!response.ok) {
    return {
      data: [],
      meta: null,
    } as StrapiListResponse<T>;
  }

  const data: StrapiListResponse<T> = await response.json();

  return data;
}
