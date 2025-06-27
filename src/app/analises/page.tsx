import { ArticleList } from '@/components/ArticleList';
import { StrapiListResponse } from '@/models/StrapiListResponse';
import { Article } from '@/models/Article';
import { reviewsQuery } from '@/queries/reviewsQuery';
import { getStrapiList } from '@/utils/getStrapiList';

export default async function Page() {
  const reviewResponse: StrapiListResponse<Article> =
    await getStrapiList<Article>('articles', reviewsQuery());

  return (
    <div>
      <ArticleList articles={reviewResponse?.data} />
    </div>
  );
}
