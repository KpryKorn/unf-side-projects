import UsersTable from "@/components/admin/UsersTable";
import prisma from "@/lib/prisma";

export default async function users() {
  const users = await prisma.user.findMany({
    include: {
      posts: {
        include: {
          author: true,
        },
      },
    },
  });

  return (
    <>
      <UsersTable users={users} />
    </>
  );
}
