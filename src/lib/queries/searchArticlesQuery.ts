import qs from 'qs';

export function searchArticlesQuery(
  query: string,
  page = 1,
  lastPublished?: string,
) {
  return qs.stringify({
    status: 'published',
    fields: ['name', 'slug', 'publishedAt', ' description'],
    filter: {
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
      page,
      pageSize: 15,
    },
  });
}
