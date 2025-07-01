import { Article } from '@/lib/models/Article';
import { ArticleList } from '@/app/ui/ArticleList';
import { getStrapiList } from '@/lib/utils/getStrapiList';
import { resumesQuery } from '@/lib/queries/resumesQuery';

export default async function ResumePage() {
  const resumeResponse = await getStrapiList<Article>(
    'articles',
    resumesQuery(),
  );

  return (
    <div>
      <ArticleList articles={resumeResponse?.data} />
    </div>
  );
}
