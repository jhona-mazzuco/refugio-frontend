import Button from '@/app/ui/Button';
import { FaSearch } from 'react-icons/fa';
import Form from 'next/form';
import { Article } from '@/lib/models/Article';
import { StrapiMeta } from '@/lib/models/StrapiMeta';
import { getStrapiList } from '@/lib/utils/getStrapiList';
import { searchArticlesQuery } from '@/lib/queries/searchArticlesQuery';
import { ArticleList } from '@/app/ui/ArticleList';
import ArticleViewMore from '@/app/ui/ArticleViewMore';
import { StrapiListResponse } from '@/lib/models/StrapiListResponse';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buscar - Refúgio Gamer',
}

interface SearchProps {
  searchParams: Promise<{ [key: string]: string }>;
}

interface SearchArticleListProps {
  articles: Article[];
  meta: StrapiMeta | null;
}

function SearchArticleList({ articles, meta }: SearchArticleListProps) {
  return (
    <section>
      <ArticleList articles={articles} />
      {meta && <ArticleViewMore pagination={meta.pagination} />}
    </section>
  );
}

export default async function SearchPage({ searchParams }: SearchProps) {
  const { query, page } = await searchParams;
  let response: StrapiListResponse<Article> | null = null;

  if (query) {
    const queryParams = searchArticlesQuery(query, page);
    response = await getStrapiList<Article>('articles', queryParams);
  }

  return (
    <section className={'min-w-5xl'}>
      <h1 className={'font-heading font-bold text-2xl mb-4'}>Buscar notícia</h1>

      <Form className={'flex justify-between gap-10 mb-4'} action={'/buscar'}>
        <fieldset
          className={
            'flex gap-2 w-full items-center border-1 border-neutral-200 p-2 rounded-lg'
          }
        >
          <FaSearch />
          <input
            id={'query'}
            name="query"
            type={'text'}
            className={'w-full outline-0'}
            placeholder={'Digite o nome da notícia...'}
          />
        </fieldset>

        <Button type="submit">Buscar</Button>
      </Form>

      {!!response && (
        <SearchArticleList articles={response.data} meta={response.meta} />
      )}
    </section>
  );
}
