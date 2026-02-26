import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

function getPreviewPath(
  contentType: string | undefined,
  slug: string | null,
  status: string | null,
): string {
  const basePath = (() => {
    if (!contentType) return '/';

    if (contentType === 'article' || contentType.includes('articles')) {
      return slug ? '/noticias/' + slug : '/noticias';
    }

    return '/' + contentType;
  })();

  return basePath + (status ? '/?status=' + status : '/');
}

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const searchParamsData = Object.fromEntries(searchParams);
  const { secret, slug, uid, status } = searchParamsData;

  if (secret !== process.env.PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 });
  }

  const contentType = uid?.split('.').pop();
  const finalPath = getPreviewPath(contentType, slug, status);

  const draft = await draftMode();
  status === 'draft' ? draft.enable() : draft.disable();

  redirect(finalPath);
};
