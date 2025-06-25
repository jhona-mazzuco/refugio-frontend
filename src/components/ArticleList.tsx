import { Article } from '@/models/Article';
import ArticleCard from './ArticleCard';

type ArticleProps = {
  articles: Article[];
}


export function ArticleList({ articles }: ArticleProps) {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 ">
        <ul>
          {
            articles.length ? articles.map((article: Article) => (
              <li key={ article.id }>
                <ArticleCard article={ article } />
              </li>
            )) : (<li>Vazio</li>)
          }
        </ul>
      </div>
    </>
  );
}
