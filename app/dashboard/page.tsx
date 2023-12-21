import ProfileForm from "./ProfileForm";
import Link from "next/link";
import PostForm from "./PostForm";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { SignInButton } from "@/components/buttons";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Dashboard() {
  const posts = await prisma.post.findMany();
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="flex flex-col gap-2 items-center justify-center">
        <p>You must be signed in to access this content.</p>
        <SignInButton />
      </div>
    );
  }
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
