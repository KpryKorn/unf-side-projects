import ProfileForm from "@/app/dashboard/ProfileForm";
import Link from "next/link";

export default async function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <Link href="/" className="mt-4 rounded-lg bg-blue-400 p-4 inline-block">
        Home
      </Link>
      <ProfileForm />
    </>
  );
}
