import ProfileForm from "./ProfileForm";
import Link from "next/link";
import PostForm from "./PostForm";
import prisma from "@/lib/prisma";

export default async function Dashboard() {
  const posts = await prisma.post.findMany();
  return (
    <>
      <h1>Dashboard</h1>
      <Link href="/" className="mt-4 btn">
        Home
      </Link>
      <ProfileForm />
      <PostForm />
      <div>
        {posts.map((post) => {
          return (
            <div key={post.id} className="my-8 p-2">
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p>{post.content}</p>
              <time>{post.createdAt.toDateString()}</time>
            </div>
          );
        })}
      </div>
    </>
  );
}
