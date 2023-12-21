import { getAllUsers } from "@/lib/actions";
import { unstable_noStore } from "next/cache";
import Link from "next/link";
import EditDialog from "./EditDialog";

export default async function Users() {
  unstable_noStore();
  const users = await getAllUsers();
  return (
    <>
      <ul className="mb-8">
        {users &&
          users.map((user) => (
            <li key={user.id}>
              {user.email} — {user.name}
              <EditDialog id={user.id} name={user.name} email={user.email} />
            </li>
          ))}
      </ul>
      <Link href="/" className="btn">
        Home
      </Link>
    </>
  );
}
