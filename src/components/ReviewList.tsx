import { Article } from '@/models/Article';
import Author from './Author';
import Score from './Score';
import { ScoreSize } from '@/models/ScoreSize';
import { homeReviewsQuery } from '@/queries/homeReviewsQuery';
import React from 'react';
import AsideContent from './AsideContent';
import { getStrapiList } from '@/utils/getStrapiList';

export default async function ReviewList() {
  const reviewResponse = await getStrapiList<Article>(
    'articles',
    homeReviewsQuery(),
  );

  function rowTemplate(data: Article): React.ReactNode {
    return (
      <>
        <div className="grid grid-cols-[1fr_auto] gap-2">
          <div className="flex flex-col gap-2">
            <label className="font-heading text-sm">{ data.game }</label>
            <Author author={ data.profile } />
          </div>

          <div className={ `justify-self-end` }>
            <Score score={ data.score! } size={ ScoreSize.medium } />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {reviewResponse?.data?.length > 0 && (
        <AsideContent
          title={'Análises'}
          seeAllUrl={'/analises'}
          listContent={reviewResponse?.data}
          listItemTemplate={rowTemplate}
        />
      )}
    </>
  );
}
