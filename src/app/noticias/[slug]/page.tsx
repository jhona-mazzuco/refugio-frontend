import { getStrapiList } from '@/lib/utils/getStrapiList';
import { Article } from '@/lib/models/Article';
import { newsBySlugQuery } from '@/lib/queries/newsBySlugQuery';
import NotContent from '@/app/ui/NotContent';
import ArticleDetail from '@/app/ui/ArticleDetail';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;

  const response = await getStrapiList<Article>(
    `articles`,
    newsBySlugQuery(slug),
  );

  if (!response.data.length) {
    return <NotContent />;
  }

  const [article] = response.data;

  return <ArticleDetail article={article} />;
}
