import { getAllUsers } from "@/lib/scripts";

export default async function Home() {
  const users = await getAllUsers();
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Users</h1>
      <ul>
        {users &&
          users.map((user) => (
            <li key={user.id}>
              {user.id} — {user.username}
            </li>
          ))}
      </ul>
    </div>
  );
}
