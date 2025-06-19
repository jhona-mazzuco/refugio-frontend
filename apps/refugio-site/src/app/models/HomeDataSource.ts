import { StrapiListResponse } from './StrapiListResponse';
import { Article } from './Article';

export interface HomeDataSource {
  articles: StrapiListResponse<Article>;
  reviews: StrapiListResponse<Article>;
}
