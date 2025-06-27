import React from 'react';
import Link from 'next/link';
import Icon from '@/components/Icon';

interface AsideContentProps {
  title: string;
  seeAllUrl: string;
  listContent: unknown[];
  listItemTemplate: (data: any) => React.ReactNode;
}

export default function AsideContent({
  title,
  seeAllUrl,
  listContent,
  listItemTemplate,
}: AsideContentProps) {
  return (
    <section>
      <div className="flex justify-between items-center border-b border-neutral-100 pb-2 mb-2">
        <h2 className="font-heading text-2xl text-wrap">{title}</h2>
        <Link
          className="flex items-center text-sm gap-1 text-primary-500"
          href={seeAllUrl}
        >
          Ver tudo
          <div className="align-middle text-xs">
            <Icon name={`arrow_right_alt`} />
          </div>
        </Link>
      </div>

      <ul className="list-none flex flex-col gap-4">
        {listContent?.map((data, idx) => (
          <li className="border-b border-neutral-100 pb-4" key={idx}>
            {listItemTemplate(data)}
          </li>
        ))}
      </ul>
    </section>
  );
}
