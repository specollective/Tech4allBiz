import type { Metadata } from "next";
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import NavDesktop from "@/app/components/NavDesktop";
import Footer from "@/app/components/Footer";
import NavMobile from "@/app/components/NavMobile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="px-6 py-8 md:px-24 md:px-0">
          <NavDesktop />
          <NavMobile />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
