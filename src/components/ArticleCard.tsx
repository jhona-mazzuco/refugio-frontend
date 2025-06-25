import { Article } from '@/models/Article';

type ArticleCardProps = {
  article: Article
}


export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <>
      { article.name }
    </>
  );
}
