import { Article } from '@/lib/models/Article';
import ArticleCard from './ArticleCard';
import Image from 'next/image';

type ArticleProps = {
  articles: Article[];
};

function EmptyTemplate() {
  return (
    <>
      <Image src={'no-content.svg'} alt={'Nenhum conteúdo encontrado'} width={400} height={400} />
    </>
  );
}

export function ArticleList({ articles }: ArticleProps) {
  return (
    <ul className="flex flex-col gap-6">
      {articles.length ? (
        articles.map((article) => (
          <ArticleCard article={article} key={article.id} />
        ))
      ) : (
        <li className={'flex justify-center'}>
          <EmptyTemplate />
        </li>
      )}
    </ul>
  );
}
