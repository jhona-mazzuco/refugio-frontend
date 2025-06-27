import { Tags } from "@/models/Tags";
import qs from "qs";

export function homeReviewsQuery() {
  return qs.stringify({
    status: 'published',
    filters: {
      tags: {
        id: {
          $eq: Tags.review,
        },
      },
    },
    fields: ['game', 'slug', 'score'],
    populate: {
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
      pageSize: 5,
    },
  })
}
