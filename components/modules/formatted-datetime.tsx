import { cn, formatDateTime } from "@/lib/utils";

export default function FormattedDatetime({
  date,
  className,
}: {
  date: string;
  className: string;
}) {
  return (
    <p className={cn("body-1 text-light-100", className)}>
      {formatDateTime(date)}
    </p>
  );
}
