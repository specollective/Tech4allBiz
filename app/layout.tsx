import type { Metadata } from "next";
import React from "react";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavDesktop from "@/app/components/nav/NavDesktop";
import Footer from "@/app/components/Footer";
import NavMobile from "@/app/components/nav/NavMobile";

const monts = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-monts",
});

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
      <body className={`${monts.variable}`}>
        <div
          className={`w-full m-auto px-6 pb-10 md:px-24 md:px-0 max-w-[1600px]`}
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
