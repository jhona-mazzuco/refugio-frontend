import { Article } from '@/lib/models/Article';
import { newsQuery } from '@/lib/queries/newsQuery';
import { ArticleList } from '@/app/ui/ArticleList';
import { getStrapiList } from '@/lib/utils/getStrapiList';

export default async function NewsPage() {
  const newsResponse = await getStrapiList<Article>('articles', newsQuery());
  return (
    <div>
      <ArticleList articles={newsResponse?.data} />
    </div>
  );
}
