import { StrapiListResponse } from '@/models/StrapiListResponse';

export function getStrapiList<T>(url: string, queryParams?: string) {
  return fetch(`${process.env['STRAPI_URL']}/${url}?${queryParams}`, {
    headers: {
      Authorization: `Bearer ${process.env['STRAPI_TOKEN']}`,
    },
  }).then((res) => res && res.json() as unknown as StrapiListResponse<T>);
}
