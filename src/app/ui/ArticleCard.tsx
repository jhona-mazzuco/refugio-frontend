import { Article } from '@/lib/models/Article';
import Link from 'next/link';
import ArticleTag from './ArticleTag';
import DatePublished from '../DatePublished';
import Author from './Author';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <section
      className={ "group grid gap-3 md:h-[196px] border-b-1 pb-4 sm:grid-cols-3 border-neutral-100 sm:border-0 sm:pb-0" }>
      <Link
        className={ `h-[228px] sm:h-full bg-cover bg-center rounded-2xl bg-no-repeat cursor-pointer` }
        style={ { backgroundImage: `url(${ article.thumbnail.url }` } }
        href={ `/noticias/${ article.slug }` }
      />

      <Link className="grid gap-3 sm:gap-1 sm:pb-1 sm:col-span-2" href={ `/noticias/${ article.slug }` }>
        <label
          className={ `font-heading text-neutral-900 font-medium sm:text-lg md:text-xl group-hover:text-primary-500
                   transition-colors delay-100 duration-300 ease-in-out cursor-pointer` }
        >
          { article.name }
        </label>

        <p className="text-base text-neutral-600">{ article.description }</p>

        <ul className="flex flex-row gap-2 flex-wrap items-center">
          {
            article.tags?.map((tag) => (
              <li key={ tag.id }>
                <ArticleTag tag={ tag }/>
              </li>
            ))
          }
        </ul>

        <div className="flex flex-wrap gap-4 items-center">
          <Author author={ article.profile }/>

          <b className="text-lg text-neutral-600 relative bottom-1">.</b>
          <p className="text-neutral-600 text-xs whitespace-pre-wrap">
            <DatePublished date={ article.publishedAt }/>
          </p>
        </div>
      </Link>
    </section>
  );
}
