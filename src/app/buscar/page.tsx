'use client';

import Button from '@/app/ui/Button';
import { FaSearch } from 'react-icons/fa';
import Form from 'next/form';

export default function SearchPage() {
  return (
    <section>
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
    </section>
  );
}
