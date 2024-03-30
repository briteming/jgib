import Navbar from "@/components/Navbar";
import { userName } from "@/constants/commons";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${userName} Blog`,
  description: `${userName}'s personal blog`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-primaryBg ${inter.className}`}>
        <Navbar />
        <main className="w-8/12 min-h-full mx-auto pb-10 pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
