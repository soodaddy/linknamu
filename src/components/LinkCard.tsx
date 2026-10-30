import type { LinkItem } from "@/data/profile";

type Props = {
  link: LinkItem;
  /** 클릭 수. 아직 받지 못했으면 0을 넘긴다. */
  count: number;
};

export default function LinkCard({ link, count }: Props) {
  // 클릭 집계를 위해 /go/[id]를 거친다. 프리페치로 집계되지 않도록 <Link> 대신 <a>를 쓴다.
  return (
    <a
      href={`/go/${link.id}`}
      className="mac-button relative flex items-center justify-center px-16 py-3 text-center text-base leading-snug"
    >
      <span>{link.title}</span>
      <span className="absolute top-1/2 right-4 -translate-y-1/2 text-base">
        {count.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
