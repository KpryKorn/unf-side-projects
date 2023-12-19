import ProfileForm from "./ProfileForm";
import Link from "next/link";
import PostForm from "./PostForm";

export default async function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <Link href="/" className="mt-4 btn">
        Home
      </Link>
      <ProfileForm />
      <PostForm />
    </>
  );
}
