import NotContent from '@/app/ui/NotContent';
import ArticleDetail from '@/app/ui/ArticleDetail';
import { previewQuery } from '@/lib/queries/previewQuery';

interface PreviewProps {
  params: Promise<{ documentId: string }>;
}

export default async function PreviewPage({ params }: PreviewProps) {
  const { documentId } = await params;

  const response = await fetch(
    `${process.env.PRIVATE_STRAPI_URL}/articles/${documentId}?${previewQuery()}`,
    {
      next: { revalidate: 60 },
      headers: {
        Authorization: `Bearer ${process.env['NEXT_PUBLIC_STRAPI_TOKEN']}`,
      },
    },
  );

  if (!response.ok) {
    return <NotContent />;
  }

  const { data } = await response.json();

  return <ArticleDetail article={data} />;
}
