"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

import defaultPfp from "@/assets/default-profile-picture.jpeg";

export function SignInButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <>...</>;
  }

  if (status === "authenticated") {
    return (
      <Link href={"/dashboard"}>
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
