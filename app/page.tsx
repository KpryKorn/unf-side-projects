import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-8">Users</h1>
      <Link href="/users" className="btn btn-small">
        Users
      </Link>
      <Link href="/users" className="btn">
        Users
      </Link>
      <Link href="/users" className="btn btn-large">
        Users
      </Link>
      <Link href="/dashboard" className="btn btn-large btn-primary">
        Dashboard
      </Link>
    </div>
  );
}
