import AsideContent from '@/components/AsideContent';
import { Release } from '@/models/Release';
import { format, parseISO } from 'date-fns';
import { homeCalendarQuery } from '@/queries/homeCalendarQuery';
import { getStrapiList } from '@/utils/getStrapiList';

export default async function ReleaseList() {
  const calendarResponse = await getStrapiList<Release>(
    'calendars',
    homeCalendarQuery(),
  );

  function itemTemplate({
    name,
    releaseDate,
    releaseHour,
    dateFormat,
  }: Release) {
    const handledDate = `${releaseDate}T${releaseHour ? releaseHour : '00:00:00'}`;
    const date = parseISO(handledDate);
    return (
      <>
        <b className={`font-heading text-sm`}>{name}</b>
        <time
          className={`block w-full text-primary-400 font-semibold`}
          dateTime={handledDate}
        >
          {format(date, dateFormat)}
        </time>
      </>
    );
  }

  return (
    <>
      {calendarResponse?.data?.length > 0 && (
        <AsideContent
          title={'Calendário'}
          seeAllUrl={'/calendario'}
          listContent={calendarResponse?.data}
          listItemTemplate={itemTemplate}
        />
      )}
    </>
  );
}
