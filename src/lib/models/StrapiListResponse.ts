import { StrapiMeta } from './StrapiMeta';

export interface StrapiListResponse<T> {
  data: T[];
  meta: StrapiMeta | null;
}
