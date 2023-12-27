import "@/assets/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "../(user)/AuthProvider";
import Sidebar from "@/components/admin/Sidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import { SignInButton } from "@/components/buttons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mon Appli Next.js",
  description: "Généré par mon template Next.js",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <p>You cannot access this content. You need to be signed in.</p>
        <SignInButton />
      </div>
    );
  }

  // rechercher l'utilisateur connecté par son ID
  const activeUser = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
  });

  if (!activeUser || activeUser.role !== "admin") {
    return <p className="container">Only admins can access this content.</p>;
  }

  return (
    <AuthProvider>
      <html lang="fr">
        <body className={inter.className + "text-slate-950"}>
          <Sidebar />
          <main className="container py-6 md:py-12 pl-48">{children}</main>
        </body>
      </html>
    </AuthProvider>
  );
}
