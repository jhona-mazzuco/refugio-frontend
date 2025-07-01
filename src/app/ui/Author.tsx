import { AuthorProfile } from '@/lib/models/AuthorProfile';
import UnoptimizedImage from '@/app/ui/UnoptimizedImage';

interface AuthorProps {
  author: AuthorProfile;
}

export default function Author({ author }: AuthorProps) {
  return (
    <>
      <div className="flex flex-row gap-2 items-center">
        <UnoptimizedImage
          src={author.avatar.url}
          alt={`Avatar de ${author.name}`}
          className={`rounded-full bg-neutral-950 w-[24px] h-[24px]`}
          height={24}
          width={24}
        />
        <label className="text-neutral-600 font-text text-xs">
          {author?.name}
        </label>
      </div>
    </>
  );
}
