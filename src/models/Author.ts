import { UploadedImage } from './UploadedImage';

export interface Author {
  id: number;
  name: string;
  biography: string;
  avatar: UploadedImage;
}
