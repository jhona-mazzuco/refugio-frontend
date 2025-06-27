import qs from 'qs';

export function homeCalendarQuery() {
  return qs.stringify({
    filters: {
      releaseDate: {
        $gte: new Date().toISOString(),
      },
    },
    fields: ['name', 'releaseDate', 'releaseHour', 'dateFormat'],
    sort: ['releaseDate:asc', 'releaseHour:asc'],
    pagination: {
      pageSize: 10,
      withCount: false,
    },
  });
}
