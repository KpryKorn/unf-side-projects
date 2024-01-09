"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

import defaultPfp from "@/assets/default-profile-picture.jpeg";
import { deletePost, deleteUser } from "@/lib/actions";
import { useRouter } from "next/navigation";

export function SignInButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <button className="btn">...</button>;
  }

  if (status === "authenticated") {
    return (
      <Link href={`/dashboard/${session.user.id}`}>
        <Image
          src={session.user?.image ?? defaultPfp}
          alt={session.user?.name ?? "Profile picture"}
          width={32}
          height={32}
        />
      </Link>
    );
  }

  return (
    <button onClick={() => signIn()} className="btn">
      Sign in
    </button>
  );
}

export function SignOutButton() {
  return (
    <button onClick={() => signOut()} className="btn btn-critical">
      Sign out
    </button>
  );
}

export function DeletePostButton({ id }: { id: number }) {
  const router = useRouter();
  return (
    <button
      onClick={() =>
        deletePost(id)
          .then(() => router.refresh())
          .catch(console.error)
      }
      className="btn btn-small btn-critical"
    >
      Delete
    </button>
  );
}

export function DeleteUserButton({ id }: { id: string }) {
  const router = useRouter();
  return (
    <button
      onClick={() =>
        deleteUser(id)
          .then(() => router.refresh())
          .catch(console.error)
      }
      className="btn btn-small btn-critical"
    >
      Delete
    </button>
  );
}

export function MessageButton() {
  return <button className="btn">Message</button>;
}

export function ParamButton() {
  return <button className="btn !font-bold text-xl">⋮</button>;
}
