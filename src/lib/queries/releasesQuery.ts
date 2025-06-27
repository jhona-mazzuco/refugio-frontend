import qs from 'qs';

export function releasesQuery() {
  return qs.stringify({
    filters: {
      releaseDate: {
        $gte: new Date().toISOString(),
      },
    },
    populate: {
      platforms: {
        fields: ['*'],
      },
    },
    sort: ['releaseDate:asc', 'releaseHour:asc'],
    pagination: {
      pageSize: 99999999999,
      withCount: false,
    },
  });
}
