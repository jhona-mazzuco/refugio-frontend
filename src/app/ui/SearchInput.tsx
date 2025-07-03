'use client'

import { FaSearch } from 'react-icons/fa';

export default function SearchInput({...props}) {

  return (
    <fieldset
      className={
        'flex gap-2 items-center w-full border-1 border-neutral-200 p-2 rounded-lg'
      }
    >
      <FaSearch />
      <input
        {...props}
        className={'w-full outline-0'}
        placeholder={'Digite o nome da notícia...'}
      />
    </fieldset>
  );
}
