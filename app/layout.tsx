import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
    <html lang="fr">
      <body className={inter.className + " container bg-slate-950 text-white"}>
        <main className="my-6 md:my-12">{children}</main>
      </body>
    </html>
  );
}
