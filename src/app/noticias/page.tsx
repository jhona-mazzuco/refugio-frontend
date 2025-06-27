import { Article } from '@/models/Article';
import { newsQuery } from '@/queries/newsQuery';
import { ArticleList } from '@/components/ArticleList';
import { getStrapiList } from '@/utils/getStrapiList';

export default async function Page() {
  const newsResponse = await getStrapiList<Article>('articles', newsQuery());
  return (
    <div>
      <ArticleList articles={newsResponse?.data} />
    </div>
  );
}
