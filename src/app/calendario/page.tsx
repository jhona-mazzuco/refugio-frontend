import { releasesQuery } from '@/lib/queries/releasesQuery';
import { Release } from '@/lib/models/Release';
import { format, parseISO } from 'date-fns';
import { ReleaseTable } from '@/app/ui/ReleaseTable';
import { pt } from 'date-fns/locale';
import { getStrapiList } from '@/lib/utils/getStrapiList';

export default async function Page() {
  const response = await getStrapiList<Release>('calendars', releasesQuery());
  const dataMap = new Map<string, Release[]>();
  for (const release of response.data) {
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
