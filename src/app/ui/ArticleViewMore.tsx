'use client';

import Button from '@/app/ui/Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Pagination } from '@/lib/models/Pagination';

interface ArticleViewMoreProps {
  pagination: Pagination;
}

export default function ArticleViewMore({ pagination }: ArticleViewMoreProps) {
  const pathname = usePathname();
  return (
    <>
      {pagination.pageCount > pagination.page && (
        <div className={'flex justify-center mt-6 mb-4'}>
          <Button>
            <Link href={pathname + `?page=${pagination.page + 1}`}>
              Ver mais
            </Link>
          </Button>
        </div>
      )}
    </>
  );
}
