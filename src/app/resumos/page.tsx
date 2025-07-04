import { Article } from '@/lib/models/Article';
import { ArticleList } from '@/app/ui/ArticleList';
import { getStrapiList } from '@/lib/utils/getStrapiList';
import { resumesQuery } from '@/lib/queries/resumesQuery';
import ArticleViewMore from '@/app/ui/ArticleViewMore';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resumos - Refúgio Gamer',
}

interface ResumeProps {
  searchParams: Promise<{ [key: string]: string }>;
}

export default async function ResumePage({ searchParams }: ResumeProps) {
  const page = (await searchParams).page;
  const response = await getStrapiList<Article>('articles', resumesQuery(page));

  return (
    <section>
      <ArticleList articles={response?.data} />
      {response.meta && (
        <ArticleViewMore pagination={response.meta.pagination} />
      )}
    </section>
  );
}
