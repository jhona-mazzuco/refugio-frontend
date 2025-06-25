import ArticleCard from '@/components/ArticleCard';
import { Article } from '@/models/Article';
import { StrapiListResponse } from '@/models/StrapiListResponse';

export default async function Index() {
  const data = await fetch((process.env['STRAPI_URL'] as string) + '/articles', {
    headers: {
      Authorization: `Bearer ${ process.env['STRAPI_TOKEN'] }`
    }
  });

  const response: StrapiListResponse<Article> = await data.json();

  return (
    <section className={ 'flex flex-col h-80 items-center justify-center' }>
      <div className="grid grid-cols-1 gap-8 ">
        <ul>
          {
            response.data.length ? response.data.map((article: Article) => (
              <li key={ article.id }>
                <ArticleCard article={ article } />
              </li>
            )) : (<li>Vazio</li>)
          }
        </ul>
      </div>
    </section>
  );
}
