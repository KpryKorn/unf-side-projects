import { getAllUsers } from "@/lib/actions";
import Link from "next/link";

export default async function Users() {
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
