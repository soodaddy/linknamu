export type Profile = {
  name: string;
  bio: string;
  /** 프로필 사진 경로. 없으면 이름의 첫 글자로 대체한다. */
  image?: string;
};

export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

// TODO: 아래 값은 화면 확인용 더미 데이터. 진짜 내용과 사진으로 교체할 것.
export const profile: Profile = {
  name: "박재신",
  bio: "AI에 관심많은 개발자",
  image: "/profile-dummy.svg",
};

export const links: LinkItem[] = [
  { id: "github", title: "😈 깃허브", url: "https://github.com/sodaddy" },
  {
    id: "linkedin",
    title: "🌎 링크드인",
    url: "https://www.linkedin.com/in/jaeshin-park-502b81177",
  },
  { id: "email", title: "⌨️ 이메일", url: "mailto:mail.jaeshin.park@gmail.com" },
];

export function findLink(id: string): LinkItem | undefined {
  return links.find((link) => link.id === id);
}
