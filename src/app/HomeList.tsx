import { Article } from '@/lib/models/Article';
import { homeArticlesQuery } from '@/lib/queries/homeArticlesQuery';
import { ArticleList } from './ui/ArticleList';
import { NextPageButton } from '@/app/ui/NextPageButton';
import { getStrapiList } from '@/lib/utils/getStrapiList';

export default async function HomeList() {
  const response = await getStrapiList<Article>(
    'articles',
    homeArticlesQuery(0),
  );

  return (
    <>
      <ArticleList articles={response?.data} />
      {response?.meta &&
        response?.meta.pagination.total > response?.data.length && (
          <div className={'flex justify-center mt-6 mb-4'}>
            <NextPageButton />
          </div>
        )}
    </>
  );
}
