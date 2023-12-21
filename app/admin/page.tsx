import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import { SignInButton } from "@/components/buttons";

export default async function page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <p>You cannot access this content. You need to be logged in.</p>
        <SignInButton />
      </div>
    );
  }

  // rechercher l'utilisateur connecté par son ID
  const activeUser = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
  });

  if (!activeUser || activeUser.role !== "admin") {
    return <p>Only admins can access this content.</p>;
  }

  return (
    <div>
      <h1>Admin Panel</h1>
    </div>
  );
}
