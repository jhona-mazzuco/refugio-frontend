import { BaseStrapiResponse } from '@/lib/models/BaseStrapiResponse';

export interface StrapiListResponse<T> extends BaseStrapiResponse {
  data: T[];
}
