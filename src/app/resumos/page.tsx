import { StrapiListResponse } from '@/models/StrapiListResponse';
import { Article } from '@/models/Article';
import { ArticleList } from '@/components/ArticleList';
import { getStrapiList } from '@/utils/getStrapiList';
import { resumesQuery } from '@/queries/resumesQuery';

export default async function Page() {
  const resumeResponse: StrapiListResponse<Article> =
    await getStrapiList<Article>('articles', resumesQuery());

  return (
    <div>
      <ArticleList articles={resumeResponse.data} />
    </div>
  );
}
