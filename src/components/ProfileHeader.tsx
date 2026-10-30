import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ name, bio, image }: Profile) {
  return (
    <header className="flex flex-col items-center gap-2 text-center">
      {image ? (
        <Image
          src={image}
          alt={`${name} 프로필 사진`}
          width={160}
          height={160}
          priority
          className="mac-photo mb-3 size-40 object-cover"
        />
      ) : (
        <div
          aria-hidden
          className="mac-photo mb-3 flex size-40 items-center justify-center text-6xl font-bold"
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="text-2xl font-bold [text-shadow:0_1px_0_#fff]">
        {name}
      </h1>
      <p className="text-base text-muted">{bio}</p>
    </header>
  );
}
