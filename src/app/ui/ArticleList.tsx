import { Article } from '@/lib/models/Article';
import ArticleCard from './ArticleCard';

type ArticleProps = {
  articles: Article[];
}

export function ArticleList({ articles }: ArticleProps) {
  return (
    <ul className="flex flex-col gap-6">
      {
        articles.length ? articles.map((article) =>
          (<ArticleCard article={ article } key={ article.id }/>)) : (<li>Vazio</li>)
      }
    </ul>
  );
}
