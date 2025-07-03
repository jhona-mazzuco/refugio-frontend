import { Article } from '@/lib/models/Article';
import { homeArticlesQuery } from '@/lib/queries/homeArticlesQuery';
import { ArticleList } from './ArticleList';
import { getStrapiList } from '@/lib/utils/getStrapiList';
import ArticleViewMore from '@/app/ui/ArticleViewMore';

interface HomeListProps {
  page?: number;
}

export default async function HomeList({ page = 1 }: HomeListProps) {
  const response = await getStrapiList<Article>(
    'articles',
    homeArticlesQuery(page),
  );

  return (
    <>
      <ArticleList articles={response?.data} />
      {!!response.meta && (
        <ArticleViewMore pagination={response.meta.pagination} />
      )}
    </>
  );
}
