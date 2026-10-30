import type { LinkItem } from "@/data/profile";

type Props = {
  link: LinkItem;
  /** 클릭 수. undefined면 표시하지 않는다. */
  count?: number;
};

export default function LinkCard({ link, count }: Props) {
  // 클릭 집계를 위해 /go/[id]를 거친다. 프리페치로 집계되지 않도록 <Link> 대신 <a>를 쓴다.
  return (
    <a
      href={`/go/${link.id}`}
      className="flex items-center justify-between rounded-2xl border border-neutral-300 px-5 py-4 font-medium transition hover:-translate-y-0.5 hover:border-emerald-600 hover:shadow-md active:translate-y-0 dark:border-neutral-700"
    >
      <span>{link.title}</span>
      {count !== undefined && (
        <span className="text-sm font-normal text-neutral-500">
          {count.toLocaleString("ko-KR")}회 클릭
        </span>
      )}
    </a>
  );
}
