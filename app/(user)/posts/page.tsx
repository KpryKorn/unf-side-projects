import prisma from "@/lib/prisma";

export default async function Page() {
  const posts = await prisma.post.findMany();

  return (
    <>
      {posts.map((post) => {
        return (
          <div key={post.id} className="my-8 p-2">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p>{post.content}</p>
            <time>{post.createdAt.toDateString()}</time>
          </div>
        );
      })}
    </>
  );
}
