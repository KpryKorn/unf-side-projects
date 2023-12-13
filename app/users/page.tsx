import { getAllUsers } from "@/lib/actions";
import { unstable_noStore } from "next/cache";
import Link from "next/link";

export default async function Users() {
  unstable_noStore();
  const users = await getAllUsers();
  return (
    <>
      <ul className="mb-8">
        {users &&
          users.map((user: any) => (
            <li key={user.id}>
              {user.email} — {user.username}
            </li>
          ))}
      </ul>
      <Link href="/" className="rounded-lg bg-blue-400 p-4">
        Home
      </Link>
    </>
  );
}
