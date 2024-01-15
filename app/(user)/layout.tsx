import "@/assets/globals.css";
import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import AuthProvider from "./AuthProvider";
import Header from "@/components/Header";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { SignInButton } from "@/components/buttons";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bricolage_grotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
});

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

  return (
    <AuthProvider>
      <html
        lang="fr"
        className={`${inter.variable} ${bricolage_grotesque.variable}`}
      >
        <body className="text-slate-950">
          <main>{children}</main>
        </body>
      </html>
    </AuthProvider>
  );
}
