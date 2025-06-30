import { Release } from '@/lib/models/Release';
import { format } from 'date-fns';
import { Platform } from '@/lib/models/Platform';

interface ReleaseRowProps {
  item: Release;
}

function RowTemplate({ item }: ReleaseRowProps) {
  function handleReleaseDate({
    releaseDate,
    releaseHour,
    dateFormat,
  }: Release) {
    const date = new Date(
      `${releaseDate} ${releaseHour ? releaseHour : '00:00'}`,
    );
    return format(date, dateFormat);
  }

  function handlePlatforms(platforms: Platform[]) {
    return platforms.map((platform) => platform.name).join(', ');
  }

  return (
    <tr className="border-b border-b-neutral-300">
      <td className="h-14 text-primary-500 font-semibold">{item.name}</td>
      <td className="h-14 text-center">{handleReleaseDate(item)}</td>
      <td className="h-14 text-center">{handlePlatforms(item.platforms)}</td>
    </tr>
  );
}

interface ReleaseTableProps {
  title: string;
  items: Release[];
}

export function ReleaseTable({ title, items }: ReleaseTableProps) {
  return (
    <table className={`table-auto border-spacing-2 w-full max-w-[800px]`}>
      <caption className="font-heading text-2xl mb-6 capitalize bg-white underline underline-offset-5 decoration-primary-400">
        {title}
      </caption>
      <thead className="font-heading">
        <tr>
          <th className="text-start w-[33%]">Nome</th>
          <th className="text-center w-[33%]">Lançamento</th>
          <th className="text-center w-[33%]">Plataformas</th>
        </tr>
      </thead>

      <tbody>
        {items.map((release) => (
          <RowTemplate item={release} key={release.id} />
        ))}
      </tbody>
    </table>
  );
}
