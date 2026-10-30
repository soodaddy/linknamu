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
      className="mac-button flex flex-col items-center justify-center gap-0.5 px-6 py-3 text-center text-base font-bold [text-shadow:0_1px_0_rgb(255_255_255/0.6)]"
    >
      <span>{link.title}</span>
      {count !== undefined && (
        <span className="text-xs font-normal text-muted">
          {count.toLocaleString("ko-KR")}회 클릭
        </span>
      )}
    </a>
  );
}
