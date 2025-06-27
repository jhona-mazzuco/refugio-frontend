import { AuthorProfile } from "@/lib/models/AuthorProfile";

interface AuthorProps {
  author: AuthorProfile;
}

export default function Author({ author }: AuthorProps) {
  return (
    <>
      <div className="flex flex-row gap-2 items-center">
        <img src={ author?.avatar?.url } className="rounded-full w-[24px] h-[24px]" alt="Avatar do escritor"/>
        <label className="text-neutral-600 font-text text-xs">{ author?.name }</label>
      </div>
    </>
  )
}
