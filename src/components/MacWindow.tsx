import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

/** 1995년 System 7.5 창 틀. 줄무늬 제목 표시줄과 양쪽 박스를 그린다. */
export default function MacWindow({ children }: Props) {
  return (
    <div className="mac-window w-full">
      <div aria-hidden className="mac-titlebar flex items-center gap-2 px-2">
        <span className="mac-box" />
        <span className="mac-stripes h-[13px] flex-1" />
        <span className="mac-box" />
      </div>
      <div className="flex flex-col gap-8 p-6 sm:p-8">{children}</div>
    </div>
  );
}
