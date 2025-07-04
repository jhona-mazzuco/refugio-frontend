import qs from 'qs';

export function searchArticlesQuery(query: string, page = '1') {
  return qs.stringify(
    {
      status: 'published',
      fields: ['name', 'slug', 'publishedAt', ' description'],
      filters: {
        $or: [
          {
            name: {
              $containsi: query,
            },
            description: {
              $containsi: query,
            },
          },
        ],
      },
      populate: {
        thumbnail: {
          fields: ['url'],
        },
        tags: {
          fields: ['name', 'textColor', 'backgroundColor'],
        },
        profile: {
          fields: ['name'],
          populate: {
            avatar: {
              fields: ['url'],
            },
          },
        },
      },
      sort: ['publishedAt:desc'],
      pagination: {
        page: Number(page),
        pageSize: 15,
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    },
  );
}
