import { Tag } from './Tag';
import { RichTextFieldContent } from './RichTextFieldContent';
import { UploadedImage } from './UploadedImage';
import { AuthorProfile } from './AuthorProfile';

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
  profile: AuthorProfile;
  score: number | null;
  game: number | null;
}
