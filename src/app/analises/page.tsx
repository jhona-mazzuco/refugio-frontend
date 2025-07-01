import { ArticleList } from '@/app/ui/ArticleList';
import { Article } from '@/lib/models/Article';
import { reviewsQuery } from '@/lib/queries/reviewsQuery';
import { getStrapiList } from '@/lib/utils/getStrapiList';

export default async function ReviewPage() {
  const reviewResponse = await getStrapiList<Article>(
    'articles',
    reviewsQuery(),
  );

  return (
    <div>
      <ArticleList articles={reviewResponse?.data ?? []} />
    </div>
  );
}
