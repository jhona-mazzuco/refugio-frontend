'use client';

import {
  BlueskyIcon,
  BlueskyShareButton,
  FacebookIcon,
  FacebookShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  ThreadsIcon,
  ThreadsShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from 'react-share';

interface ShareBarProps {
  shareUrl: string;
}

export default function ShareBar({ shareUrl }: ShareBarProps) {
  return (
    <div className={`flex gap-2 items-center justify-end flex-wrap`}>
      <FacebookShareButton url={shareUrl}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton url={shareUrl}>
        <XIcon size={32} round />
      </TwitterShareButton>

      <WhatsappShareButton url={shareUrl}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>

      <TelegramShareButton url={shareUrl}>
        <TelegramIcon size={32} round />
      </TelegramShareButton>

      <RedditShareButton url={shareUrl}>
        <RedditIcon size={32} round />
      </RedditShareButton>

      <ThreadsShareButton url={shareUrl}>
        <ThreadsIcon size={32} round />
      </ThreadsShareButton>

      <BlueskyShareButton url={shareUrl}>
        <BlueskyIcon size={32} round />
      </BlueskyShareButton>
    </div>
  );
}
