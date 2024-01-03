import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";

interface UserDashboardProps {
  params: {
    id: string;
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

  return <div>{session?.user.id}</div>;
}
