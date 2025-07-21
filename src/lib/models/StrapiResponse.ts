import { BaseStrapiResponse } from '@/lib/models/BaseStrapiResponse';

export interface StrapiResponse<T> extends BaseStrapiResponse {
  data: T;
}
