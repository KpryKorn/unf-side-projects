import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { permanentRedirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  return permanentRedirect(`/dashboard/${session?.user.id}`);
}
