import qs from 'qs';

export function homeArticlesQuery(page = 1, lastPublished?: string) {
  const query = {
    status: 'published',
    fields: ['name', 'slug', 'publishedAt', ' description'],
    filter: lastPublished ? {
      publishedAt: {
        $lt: lastPublished,
      },
    } : null,
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
  };

  return qs.stringify(query);
}
