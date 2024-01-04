import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import ProfileForm from "../ProfileForm";

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
    </>
  );
}
