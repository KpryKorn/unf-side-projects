import ProfileForm from "@/components/Form/ProfileForm";
import Link from "next/link";

export default async function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <ProfileForm />
      <Link href="/" className="rounded-lg bg-blue-400 p-4">
        Home
      </Link>
    </>
  );
}
