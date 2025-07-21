import qs from 'qs';

export function previewQuery() {
  return qs.stringify({
    status: 'null',
    fields: ['name', 'slug', 'content', 'description', 'score'],
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
