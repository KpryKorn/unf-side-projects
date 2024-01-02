import PostTable from "@/components/admin/PostTable";
import prisma from "@/lib/prisma";

export default async function Page() {
  const posts = await prisma.post.findMany({
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
    include: {
      author: {
        select: {
          name: true, // fetch le nom de l'auteur du post
        },
      },
    },
  });

  return (
    <>
      <PostTable posts={posts} />
    </>
  );
}
