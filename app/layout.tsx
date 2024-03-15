import type { Metadata } from "next";
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import NavDesktop from "@/app/components/NavDesktop";
import Footer from "@/app/components/Footer";
import NavMobile from "@/app/components/NavMobile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "tech4all.biz",
  description:
    "Enabling equitable usage and building of inclusive technology by buildJustly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div
          className={`w-full m-auto px-6 py-8 md:px-24 md:px-0 max-w-[1600px]`}
        >
          <NavDesktop />
          <NavMobile />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
