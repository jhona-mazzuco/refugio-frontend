import { formatRelative, parseISO } from "date-fns";
import { pt } from "date-fns/locale";

interface DatePublishedProps {
  date: string;
}

export default function DatePublished({ date }: DatePublishedProps) {
  const dateISO = parseISO(date);
  return (
    <time dateTime={ date }>{ formatRelative(dateISO, new Date(), { locale: pt, weekStartsOn: 0 }) }</time>
  )
}
