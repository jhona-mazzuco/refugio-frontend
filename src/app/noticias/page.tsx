import { Article } from '@/lib/models/Article';
import { newsQuery } from '@/lib/queries/newsQuery';
import { ArticleList } from '@/app/ui/ArticleList';
import { getStrapiList } from '@/lib/utils/getStrapiList';
import ArticleViewMore from '@/app/ui/ArticleViewMore';

interface NewsProps {
  searchParams: Promise<{ [key: string]: string }>;
}

export default async function NewsPage({ searchParams }: NewsProps) {
  const page = (await searchParams).page;
  const response = await getStrapiList<Article>('articles', newsQuery(page));

  return (
    <section>
      <ArticleList articles={response?.data} />
      {response.meta && (
        <ArticleViewMore pagination={response.meta.pagination} />
      )}
    </section>
  );
}
