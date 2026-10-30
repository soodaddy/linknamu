import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ name, bio, image }: Profile) {
  return (
    <header className="flex flex-col items-center gap-3 text-center">
      {image ? (
        <Image
          src={image}
          alt={`${name} 프로필 사진`}
          width={160}
          height={160}
          priority
          className="size-40 rounded-full object-cover"
        />
      ) : (
        <div
          aria-hidden
          className="flex size-40 items-center justify-center rounded-full bg-emerald-600 text-6xl font-bold text-white"
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-neutral-600 dark:text-neutral-400">{bio}</p>
    </header>
  );
}
