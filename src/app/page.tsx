import { Suspense } from "react";
import LinkList, { LinkListFallback } from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col gap-8 px-4 py-12">
      <ProfileHeader {...profile} />
      <Suspense fallback={<LinkListFallback />}>
        <LinkList />
      </Suspense>
    </main>
  );
}
