import prisma from "@/lib/prisma";
import Image from "next/image";
import defaultPfp from "@/assets/default-profile-picture.jpeg";
import { Metadata } from "next";
import Chip from "@/components/chip";
import FeaturedProject from "@/components/FeaturedProject";
import { MessageButton, ParamButton } from "@/components/buttons";
import { ExperienceProfileBadge, ProjectsProfileBadge } from "./profile-badges";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";

interface UserProfileProps {
  params: {
    id: string;
  };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
    },
  });

  return users.map((user) => ({
    id: user.id,
  }));
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
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });
  const { name, bio, image, role } = user ?? {};

  return (
    <>
      <div className="absolute -z-10 top-0 left-0 w-full h-[325px] bg-gradient-to-r from-orange-200 to-purple-400"></div>
      <article className="mt-10">
        <div className="flex items-end justify-between mb-8">
          <Image
            src={image ?? defaultPfp}
            alt={name ?? "Profile picture"}
            width={200}
            height={200}
            className="rounded-full p-1 bg-gradient-to-l from-orange-300 to-purple-500 shadow-lg"
          />
          <div className="flex gap-1">
            <ParamButton />
            <MessageButton />
            {session?.user.id === user?.id && (
              <Link href={`/dashboard/${user?.id}`} className="btn btn-primary">
                Edit Profile
              </Link>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between mt-[10px] mb-1">
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-2">
              <h1 className="font-serif font-semibold text-3xl leading-none tracking-tight">
                {name ?? "Incomplete name"}
              </h1>
              <Chip text={role} />
            </div>
            <p className="font-medium text-gray-700">{bio ?? ""}</p>
          </div>
          <div className="flex items-center gap-2">
            <ProjectsProfileBadge projects={39} />
            <ExperienceProfileBadge experience={2} />
          </div>
        </div>

        <hr className="my-8" />

        <FeaturedProject />
      </article>
    </>
  );
}
