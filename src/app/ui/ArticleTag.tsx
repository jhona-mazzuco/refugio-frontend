import { Tag } from "@/lib/models/Tag";

interface ArticleTagProps {
  tag: Tag;
}

export default function ArticleTag({ tag }: ArticleTagProps) {
  return (
    <>
      <b
        className="block px-3 py-1 text-xs border-2 rounded-full"
        style={ { color: tag.textColor, borderColor: tag.backgroundColor } }
      >
        { tag.name }
      </b>
    </>
  )
}
