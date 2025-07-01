import { RichTextFieldContent } from '@/lib/models/RichTextFieldContent';
import { RichTextFieldContentType } from '@/lib/models/RichTextFieldContentType';
import Link from 'next/link';
import classNames from 'classnames';
import UnoptimizedImage from '@/app/ui/UnoptimizedImage';
import { RichTextFieldContentListFormat } from '@/lib/models/RichTextFieldContentListFormat';

interface ArticleRendererProps {
  content: RichTextFieldContent[];
}

interface ContentProps {
  content: RichTextFieldContent;
}

interface StyledTextProps extends ContentProps {
  children: React.ReactNode;
}

function StyledText({ content, children }: StyledTextProps) {
  const { bold, code, italic, strikethrough, underline } = content;
  return (
    <span
      className={classNames([
        'decoration-primary-300',
        {
          'font-bold': bold,
          italic: italic,
          'line-through': strikethrough,
          underline: underline,
          'block border-2 border-primary-300 rounded-md p-4': code,
        },
      ])}
    >
      {children}
    </span>
  );
}

function Paragraph({ content }: ContentProps) {
  function getTemplate(content: RichTextFieldContent, key: number) {
    const contentType = content.type;
    if (contentType === RichTextFieldContentType.link) {
      return (
        <Link
          className={'text-primary-500 font-semibold'}
          href={content.url!}
          target="_blank"
          rel="noopener noreferrer"
          key={key}
        >
          {content.children?.map((anchor) => anchor.text).join(' ')}
        </Link>
      );
    }

    return (
      <StyledText content={content} key={key}>
        {content.text}
      </StyledText>
    );
  }

  return (
    <p className={`text-lg my-4`}>
      {content.children?.map((row, key) => getTemplate(row, key))}
    </p>
  );
}

function Image({ content }: ContentProps) {
  return (
    <p className={`flex justify-center`}>
      {content.image && (
        <UnoptimizedImage
          src={content.image.url}
          alt={content.image.alternativeText}
          className={"w-[80%] rounded-md border-2 shadow-primary-300"}
          width={100}
          height={100}
        />
      )}
    </p>
  );
}

function List({ content }: ContentProps) {
  const isOrdered = content.format === RichTextFieldContentListFormat.ordered;

  if (isOrdered) {
    return (
      <ol className="list-decimal marker:text-primary-400 marker:text-sm">
        {content.children?.map((list) =>
          list.children?.map((item, idx) => (
            <li key={idx}>
              <StyledText content={item}>{item.text}</StyledText>
            </li>
          )),
        )}
      </ol>
    );
  }

  return (
    <ul className="list-disc marker:text-primary-400 marker:text-sm">
      {content.children?.map((list) =>
        list.children?.map((item, idx) => (
          <li key={idx}>
            <StyledText content={item}>{item.text}</StyledText>
          </li>
        )),
      )}
    </ul>
  );
}

function Heading({ content }: ContentProps) {
  const headingLevel = content.level;
  const headingClassName = classNames([
    {
      'font-bold font-title text-3xl text-primary-500': headingLevel === 1,
      'font-bold font-title text-2xl text-primary-500': headingLevel === 2,
      'font-bold font-title text-xl text-primary-500':
        headingLevel === 3 || headingLevel === 4,
      'font-semibold font-title text-xl text-primary-500': headingLevel === 5,
      'font-semibold font-title text-lg text-primary-500': headingLevel === 6,
    },
  ]);

  switch (headingLevel) {
    case 1:
      return (
        <h1 className={headingClassName}>
          {content.children?.map((child) => child.text).join(' ')}
        </h1>
      );
    case 2:
      return (
        <h2 className={headingClassName}>
          {content.children?.map((child) => child.text).join(' ')}
        </h2>
      );
    case 3:
      return (
        <h3 className={headingClassName}>
          {content.children?.map((child) => child.text).join(' ')}
        </h3>
      );
    case 4:
      return (
        <h4 className={headingClassName}>
          {content.children?.map((child) => child.text).join(' ')}
        </h4>
      );
    case 5:
      return (
        <h5 className={headingClassName}>
          {content.children?.map((child) => child.text).join(' ')}
        </h5>
      );
    case 6:
      return (
        <h6 className={headingClassName}>
          {content.children?.map((child) => child.text).join(' ')}
        </h6>
      );
  }
}

function Quote({ content }: ContentProps) {
  return (
    <div className="flex justify-center">
      <blockquote className="relative p-8 rounded-2xl border-1 w-full sm:max-w-[640px]">
        <svg
          className="absolute -top-4 -start-0 size-12 text-primary-400"
          width="12"
          height="12"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
            fill="currentColor"
          ></path>
        </svg>

        <div className="relative z-10">
          <p className="text-lg font-semibold">
            <em>{content.children?.map((child) => child.text).join(' ')}</em>
          </p>
        </div>
      </blockquote>
    </div>
  );
}

export default function ArticleRenderer({ content }: ArticleRendererProps) {
  return (
    <>
      {content.map((row, idx) => {
        switch (row.type) {
          case RichTextFieldContentType.paragraph:
            return <Paragraph content={row} key={idx} />;
          case RichTextFieldContentType.image:
            return <Image content={row} key={idx} />;
          case RichTextFieldContentType.list:
            return <List content={row} key={idx} />;
          case RichTextFieldContentType.heading:
            return <Heading content={row} key={idx} />;
          case RichTextFieldContentType.quote:
            return <Quote content={row} key={idx} />;
        }
      })}
    </>
  );
}
