import "@/assets/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "../(user)/AuthProvider";
import Sidebar from "@/components/admin/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mon Appli Next.js",
  description: "Généré par mon template Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
