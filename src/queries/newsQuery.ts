import qs from 'qs';
import { Tags } from '@/models/Tags';

export function newsQuery() {
  return qs.stringify({
    status: 'published',
    filters: {
      tags: {
        id: {
          $contains: Tags.news,
        },
      },
    },
    fields: ['name', 'slug', 'publishedAt', 'description'],
    populate: {
      thumbnail: {
        fields: ['url'],
      },
      tags: {
        fields: ['id', 'name', 'textColor', 'backgroundColor'],
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
      pageSize: 10,
    },
  });
}
