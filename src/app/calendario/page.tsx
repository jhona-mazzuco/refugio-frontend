import { releasesQuery } from '@/queries/releasesQuery';
import { Release } from '@/models/Release';
import { format, parseISO } from 'date-fns';
import { ReleaseTable } from '@/components/ReleaseTable';
import { pt } from 'date-fns/locale';
import { getStrapiList } from '@/utils/getStrapiList';

export default async function Page() {
  const releasesResponse = await getStrapiList<Release>(
    'calendars',
    releasesQuery(),
  ).then((response) => {
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

    return dataMap.entries().map(([title, items]) => ({ title, items }));
  });

  return (
    <section className="flex flex-col items-center gap-8">
      {releasesResponse.map(({ title, items }) => (
        <ReleaseTable title={title} items={items} key={title} />
      ))}
    </section>
  );
}
