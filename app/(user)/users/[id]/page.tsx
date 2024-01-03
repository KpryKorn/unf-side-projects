import prisma from "@/lib/prisma";
import Image from "next/image";
import defaultPfp from "@/assets/default-profile-picture.jpeg";
import { Metadata } from "next";

interface UserProfileProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: UserProfileProps): Promise<Metadata> {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });
  return {
    title: `User profile of ${user?.name}`,
  };
}

export default async function UserProfile({ params }: UserProfileProps) {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });
  const { name, bio, image, role, age } = user ?? {};

  return (
    <div>
      <h1>{name}</h1>

      <Image
        src={image ?? defaultPfp}
        alt={name ?? "Profile picture"}
        width={200}
        height={200}
        className="rounded-full"
      />

      <div className="mt-[10px] mb-1">
        <h2>Bio:</h2>
        <p>{bio ?? "Incomplete biography"}</p>
      </div>

      <div className="mt-[10px] mb-1 flex items-center gap-1">
        <h2>Role:</h2>
        <p>{role}</p>
      </div>

      <div className="mt-[10px] mb-1 flex items-center gap-1">
        <h2>Age:</h2>
        <p>{age ?? "Incomplete"}</p>
      </div>
    </div>
  );
}
