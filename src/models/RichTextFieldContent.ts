import { RichTextFieldContentType } from './RichTextFieldContentType';
import { RichTextFieldContentImage } from './RichTextFieldContentImage';
import { RichTextFieldContentListFormat } from './RichTextFieldContentListFormat';

export interface RichTextFieldContent {
  type: RichTextFieldContentType;
  level?: number;
  text?: string;
  url?: string;
  bold?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  italic?: boolean;
  code?: boolean;
  format?: RichTextFieldContentListFormat;
  image?: RichTextFieldContentImage;
  children?: RichTextFieldContent[];
}
