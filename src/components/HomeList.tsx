import { Article } from '@/models/Article';
import { homeArticlesQuery } from '@/queries/homeArticlesQuery';
import { ArticleList } from './ArticleList';
import { NextPageButton } from '@/components/NextPageButton';
import { getStrapiList } from '@/utils/getStrapiList';

export default async function HomeList() {
  const articleResponse = await getStrapiList<Article>(
    'articles',
    homeArticlesQuery(0),
  );

  return (
    <>
      <ArticleList articles={articleResponse.data} />
      {articleResponse.meta.pagination.total > articleResponse.data.length && (
        <div className={'flex justify-center mt-6 mb-4'}>
          <NextPageButton />
        </div>
      )}
    </>
  );
}
