'use client';

import sanitizeHtml from 'sanitize-html';

interface ArticleEmbedProps {
  html: string;
}

export function ArticleEmbed({ html }: ArticleEmbedProps) {
  const sanitizedHtml = sanitizeHtml(html, {
    allowedTags: ['iframe'],
    allowedAttributes: false,
    allowedIframeHostnames: ['www.youtube.com'],
  });
  return (
    <span
      className={'flex justify-center'}
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
}
