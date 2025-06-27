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
    };
  }

  const data = await response.json();

  return data;
}
