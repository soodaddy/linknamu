import { connection } from "next/server";
import { links } from "@/data/profile";
import { getClickCounts } from "@/lib/clicks";
import LinkCard from "./LinkCard";

function Cards({ counts }: { counts: Record<string, number> | null }) {
  return (
    <ul className="flex flex-col gap-3">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard link={link} count={counts?.[link.id] ?? 0} />
        </li>
      ))}
    </ul>
  );
}

/** 클릭 수를 기다리는 동안 0회로 보여줄 카드 목록 (링크는 바로 동작한다). */
export function LinkListFallback() {
  return <Cards counts={null} />;
}

export default async function LinkList() {
  // DB 조회는 미리 만들어 두지 않고 요청이 들어온 뒤에 실행한다.
  await connection();
  const counts = await getClickCounts();
  return <Cards counts={counts} />;
}
