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
    transformTags: {
      iframe: function (tagName, attribs) {
        return {
          tagName,
          attribs: {
            ...attribs,
            class: 'w-full max-w-lg aspect-video',
          },
        };
      },
    },
  });
  return (
    <span
      className={'flex justify-center'}
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
}
