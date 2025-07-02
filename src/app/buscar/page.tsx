'use client';

import Button from '@/app/ui/Button';
import { FaSearch } from 'react-icons/fa';
import Form from 'next/form';
import { Article } from '@/lib/models/Article';
import { searchArticlesQuery } from '@/lib/queries/searchArticlesQuery';
import { useSearchParams } from 'next/navigation';
import { ArticleList } from '@/app/ui/ArticleList';
import { getClientStrapiList } from '@/lib/utils/getClientStrapiList';

export default function SearchPage() {
  const queryParams = useSearchParams();

  let articles: Article[] = [];
  const query = queryParams.get('query');
  if (query) {
    getClientStrapiList(
      'articles',
      searchArticlesQuery(query),
    ).then((response) => {
      if (response.data?.length) {
        articles = [...response.data] as Article[];
      }
    });
  }

  return (
    <section>
      <b>{queryParams.get('query')}</b>
      <h1 className={'font-heading  font-bold text-2xl mb-4'}>
        Buscar notícia
      </h1>

      <Form className={'flex justify-between gap-10'} action={'/buscar'}>
        <fieldset
          className={
            'flex gap-2 items-center w-full border-1 border-neutral-200 p-2 rounded-lg'
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

      {!!articles.length && <ArticleList articles={articles} />}
    </section>
  );
}
