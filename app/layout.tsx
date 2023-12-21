import "@/assets/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "./AuthProvider";
import Header from "@/components/Header";

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
        <body className={inter.className + " container text-slate-950"}>
          <Header />
          <main className="py-6 md:py-12">{children}</main>
        </body>
      </html>
    </AuthProvider>
  );
}
