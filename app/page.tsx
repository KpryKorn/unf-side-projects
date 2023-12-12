import getAllUsers from "@/lib/script";

export default async function Home() {
  const users = await getAllUsers();
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users &&
          users.map((user) => (
            <li key={user.id}>
              {user.id}: {user.username}
            </li>
          ))}
      </ul>
    </div>
  );
}
