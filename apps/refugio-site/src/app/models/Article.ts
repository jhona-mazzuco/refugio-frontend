import { Tag } from './Tag';
import { RichTextFieldContent } from './RichTextFieldContent';
import { UploadedImage } from './UploadedImage';
import { Author } from './Author';

export interface Article {
  id: number;
  documentId: string;
  name: string;
  description: string;
  thumbnail: UploadedImage;
  slug: string;
  content: RichTextFieldContent[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  tags: Tag[];
  profile: Author;
  score: number | null;
  game: number | null;
}
