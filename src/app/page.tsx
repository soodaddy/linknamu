import { Suspense } from "react";
import LinkList, { LinkListFallback } from "@/components/LinkList";
import MacWindow from "@/components/MacWindow";
import ProfileHeader from "@/components/ProfileHeader";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center px-4 py-10 sm:py-16">
      <MacWindow>
        <ProfileHeader {...profile} />
        <Suspense fallback={<LinkListFallback />}>
          <LinkList />
        </Suspense>
      </MacWindow>
    </main>
  );
}
