import { getAllUsers } from "@/lib/actions";
import EditDialog from "@/app/(user)/users/EditDialog";

export default async function users() {
  const users = await getAllUsers();

  return (
    <ul className="mb-8">
      {users &&
        users.map((user) => (
          <li key={user.id}>
            {user.role} — {user.name}
            <EditDialog id={user.id} name={user.name} email={user.email} />
          </li>
        ))}
    </ul>
  );
}
