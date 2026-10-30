import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

/** Mac OS X(Aqua) 창 틀. 그라데이션 제목 표시줄과 신호등 버튼을 그린다. */
export default function MacWindow({ children }: Props) {
  return (
    <div className="mac-window w-full">
      <div aria-hidden className="mac-titlebar flex items-center gap-2 px-3">
        <span className="mac-light [--c:#ff5f57]" />
        <span className="mac-light [--c:#ffbd2e]" />
        <span className="mac-light [--c:#28c940]" />
      </div>
      <div className="flex flex-col gap-8 p-6 sm:p-8">{children}</div>
    </div>
  );
}
