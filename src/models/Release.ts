import { Platform } from './Platform';

export interface Release {
  id: string;
  name: string;
  dateFormat: string;
  type: string;
  platforms: Platform[];
  releaseDate: string;
  releaseHour: string;
}
