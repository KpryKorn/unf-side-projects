import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import ProfileForm from "../ProfileForm";
import PostForm from "../PostForm";
import { Metadata } from "next";

interface UserDashboardProps {
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
}: {
  params: { id: string };
}): Promise<Metadata> {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });
  return {
    title: `${user?.name} Dashboard`,
  };
}

export default async function UserDashboard({ params }: UserDashboardProps) {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });

  if (session?.user.id !== user?.id) {
    return <div>Unauthorized</div>; // TODO: return 401
  }

  return (
    <>
      <h1 className="font-semibold text-2xl">Edit Profile</h1>
      <ProfileForm user={user!} />
      <PostForm />
    </>
  );
}
