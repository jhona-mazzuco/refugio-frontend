import { getStrapiList } from '@/lib/utils/getStrapiList';
import { Article } from '@/lib/models/Article';
import { newsBySlugQuery } from '@/lib/queries/newsBySlugQuery';
import NotContent from '@/app/ui/NotContent';
import ArticleDetail from '@/app/ui/ArticleDetail';
import { Metadata, ResolvingMetadata } from 'next';
import { Author } from 'next/dist/lib/metadata/types/metadata-types';
import { draftMode } from 'next/headers';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  { params }: ArticlePageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;

  const { data } = await getStrapiList<Article>(
    'articles',
    newsBySlugQuery(slug),
  );

  if (!data?.length) {
    return {};
  }

  const [article] = data;
  const title = `${article.name} - Refúgio Gamer`;
  const description = article.description;
  const profile = article.profile;
  const author: Author = {
    name: profile.name,
    url: new URL(profile.avatar.url),
  };
  return {
    title,
    description,
    authors: [author],
    openGraph: {
      title,
      description,
      images: [
        {
          url: article.thumbnail.url,
          alt: `Thumbnail de notícia: ${article.name}`,
        },
      ],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;

  const { isEnabled: isDraftMode } = await draftMode();
  const status = isDraftMode ? 'draft' : 'published';

  const response = await getStrapiList<Article>(
    `articles`,
    newsBySlugQuery(slug, status),
  );

  if (!response.data.length) {
    return <NotContent />;
  }

  const [article] = response.data;

  return <ArticleDetail article={article} />;
}
