import qs from 'qs';

export function previewQuery() {
  return qs.stringify({
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
