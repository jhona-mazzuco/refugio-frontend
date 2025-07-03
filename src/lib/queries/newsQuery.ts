import qs from 'qs';
import { Tags } from '@/lib/models/Tags';

export function newsQuery(page = '1') {
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
      page: Number.parseInt(page),
      pageSize: 10,
    },
  });
}
