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
          users.map((user) => (
            <li key={user.id} className="mb-2">
              {user.role} — {user.name}
              <Link
                href={`/users/${user.id}`}
                className="ml-2 btn btn-small btn-primary"
              >
                Check user profile
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
