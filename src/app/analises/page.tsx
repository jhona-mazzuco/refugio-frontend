import { ArticleList } from '@/app/ui/ArticleList';
import { Article } from '@/lib/models/Article';
import { reviewsQuery } from '@/lib/queries/reviewsQuery';
import { getStrapiList } from '@/lib/utils/getStrapiList';
import ArticleViewMore from '@/app/ui/ArticleViewMore';

interface ReviewProps {
  searchParams: Promise<{ [key: string]: string }>;
}

export default async function ReviewPage({ searchParams }: ReviewProps) {
  const page = (await searchParams).page;
  const response = await getStrapiList<Article>('articles', reviewsQuery(page));

  return (
    <div>
      <ArticleList articles={response?.data ?? []} />
      {response.meta && (
        <ArticleViewMore pagination={response.meta.pagination} />
      )}
    </div>
  );
}
