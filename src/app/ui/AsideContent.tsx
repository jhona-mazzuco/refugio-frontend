import React from 'react';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa6';

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
      <div className="flex justify-between items-center flex-wrap gap-3 font-heading border-b border-neutral-100 pb-2 mb-2">
        <h2 className="text-2xl">{title}</h2>
        <Link
          className="flex items-center justify-self-end gap-[2px] text-xs text-primary-500"
          href={seeAllUrl}
        >
          Ver tudo
          <FaChevronRight />
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
