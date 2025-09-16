import { Article } from '@/lib/models/Article';
import { Thumbnail } from '@/app/ui/Thumbnail';
import ArticleRenderer from '@/app/ui/ArticleRenderer';
import Score from '@/app/ui/Score';
import { ScoreSize } from '@/lib/models/ScoreSize';
import ArticleTag from '@/app/ui/ArticleTag';
import UnoptimizedImage from '@/app/ui/UnoptimizedImage';

interface ArticleDetailProps {
  article: Article;
}

export default function ArticleDetail({ article }: ArticleDetailProps) {
  const reviewID = 7;
  const isReview =
    !Number.isNaN(article.score) &&
    article.tags.some((tag) => tag.id === reviewID);
  const author = article.profile;

  return (
    <article className="flex flex-col gap-4 px-2 sm:p-0">
      <Thumbnail
        thumbnail={article.thumbnail.url}
        title={article.name}
        description={article.description}
      />

      <ArticleRenderer content={article.content} />

      {isReview && (
        <div className="flex flex-col gap-3 justify-center items-center">
          <b>Nota selecionada:</b>
          <Score score={article.score!} size={ScoreSize.larger} />
        </div>
      )}

      {!!article.tags.length && (
        <div className="flex gap-2 my-4 items-center">
          <b className="text-sm">Tags:</b>
          {article.tags.map((tag) => (
            <ArticleTag tag={tag} key={tag.id} />
          ))}
        </div>
      )}

      <div className="flex gap-4">
        <UnoptimizedImage
          src={author.avatar.url}
          alt={`Avatar de ${author.name}`}
          className={`rounded-full w-[80px] h-[80px]`}
          width={80}
          height={80}
        />
        <div className="flex flex-col">
          <b className="text-lg mb-2">{author.name}</b>
          <p className="text-sm text-neutral-500">{author.biography} </p>
        </div>
      </div>
    </article>
  );
}
