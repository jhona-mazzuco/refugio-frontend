import qs from 'qs';

export function newsBySlugQuery(slug: string, status: string = 'published') {
  return qs.stringify({
    status,
    filters: {
      slug: {
        $eq: slug,
      },
    },
    fields: ['name', 'slug', 'content', 'publishedAt', 'description', 'score'],
    populate: {
      thumbnail: {
        fields: ['url'],
      },
      tags: {
        fields: ['name', 'textColor', 'backgroundColor'],
      },
      profile: {
        fields: ['name', 'biography'],
        populate: {
          avatar: {
            fields: ['url'],
          },
        },
      },
    },
  });
}
