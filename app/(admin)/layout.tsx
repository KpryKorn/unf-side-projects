import "@/assets/globals.css";
import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import AuthProvider from "../(user)/AuthProvider";
import Sidebar from "@/components/admin/Sidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import { SignInButton } from "@/components/buttons";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const bricolage_grotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
});

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Généré par mon template Next.js",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    // si l'utilisateur n'est pas connecté
    return (
      <AuthProvider>
        <html
          lang="fr"
          className={`${inter.variable} ${bricolage_grotesque.variable}`}
        >
          <body className="text-slate-950">
            <main className="container py-6 md:py-12">
              <div className="flex flex-col items-center justify-center gap-4">
                <p>You cannot access this content. You need to be signed in.</p>
                <SignInButton />
              </div>
            </main>
          </body>
        </html>
      </AuthProvider>
    );
  }

  // rechercher l'utilisateur connecté par son ID
  const activeUser = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
  });

  if (!activeUser || activeUser.role !== "admin") {
    // si l'utilisateur n'est pas admin
    return (
      <AuthProvider>
        <html
          lang="fr"
          className={`${inter.variable} ${bricolage_grotesque.variable}`}
        >
          <body className="text-slate-950">
            <main className="container py-6 md:py-12">
              <div className="flex flex-col items-center justify-center gap-4">
                <p>Only admins can access this content.</p>
              </div>
            </main>
          </body>
        </html>
      </AuthProvider>
    );
  }

  return (
    <AuthProvider>
      <html
        lang="fr"
        className={`${inter.variable} ${bricolage_grotesque.variable}`}
      >
        <body className="text-slate-950">
          <Sidebar />
          <main className="container py-6 md:py-12 pl-48">{children}</main>
        </body>
      </html>
    </AuthProvider>
  );
}
