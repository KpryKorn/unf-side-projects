import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-8">Users</h1>
      <Link href="/users" className="rounded-lg bg-blue-400 p-4">
        Users
      </Link>
    </div>
  );
}
