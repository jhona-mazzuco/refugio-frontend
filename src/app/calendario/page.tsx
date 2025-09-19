import { releasesQuery } from '@/lib/queries/releasesQuery';
import { Release } from '@/lib/models/Release';
import { endOfYear, format, isAfter, parseISO, toDate } from 'date-fns';
import { ReleaseTable } from '@/app/ui/ReleaseTable';
import { pt } from 'date-fns/locale';
import { getStrapiList } from '@/lib/utils/getStrapiList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calendário - Refúgio Gamer',
};

export default async function ReleasePage() {
  const response = await getStrapiList<Release>('calendars', releasesQuery());
  const dataMap = new Map<string, Release[]>();
  const sortedData = response.data.sort((a, b) => {
    const notHaveReleaseDate = b.dateFormat === 'yyyy';
    if (notHaveReleaseDate) {
      return isAfter(endOfYear(b.releaseDate), toDate(a.releaseDate)) ? -1 : 1;
    }

    return isAfter(toDate(b.releaseDate), toDate(a.releaseDate)) ? -1 : 1;
  });

  for (const release of sortedData) {
    const hasReleaseDate = release.dateFormat !== 'yyyy';
    const releaseDateISO = parseISO(release.releaseDate);
    const key = format(releaseDateISO, hasReleaseDate ? 'MMMM/yy' : 'yyyy', {
      locale: pt,
    }) as string;
    const hasContent = dataMap.has(key);
    if (hasContent) {
      const list = dataMap.get(key) as Release[];
      list.push(release);
    } else {
      dataMap.set(key, [release]);
    }
  }

  return (
    <section className="flex flex-col items-center gap-8">
      {dataMap &&
        [...dataMap.entries()].map(([title, items]) => (
          <ReleaseTable title={title} items={items} key={title} />
        ))}
    </section>
  );
}
