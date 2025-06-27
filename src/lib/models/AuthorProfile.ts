import { UploadedImage } from './UploadedImage';

export interface AuthorProfile {
  id: number;
  name: string;
  biography: string;
  avatar: UploadedImage;
}
