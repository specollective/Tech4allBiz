import React from "react";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Montserrat } from "next/font/google";
import NavDesktop from "@/app/components/nav/NavDesktop";
import Footer from "@/app/components/Footer";
import NavMobile from "@/app/components/nav/NavMobile";
import "./globals.css";

const monts = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-monts",
});

export const metadata: Metadata = {
  title: "tech4all.biz",
  description:
    "Enabling equitable usage and building of inclusive technology by buildJustly.",
  authors: [{ name: "BuildJustly", url: "https://buildjustly.org/" }],
  openGraph: {
    title: "tech4all.biz",
    description:
      "Tech4all.biz helps small business owners just like you build skills and confidence step by step by showing how other small business owners integrate technology into their businesses.",
    url: "https://tech4all.biz",
    type: "article",
    authors: ["BuildJustly"],
    siteName: "Tech4All.Biz",
    publishedTime: new Date().toISOString(),
    modifiedTime: new Date().toISOString(),
    images: [
      {
        url: "https://tech4all.biz/open-graph.png",
        secureUrl: "https://tech4all.biz/open-graph.png",
        width: 520,
        height: 270,
        alt: "Preview image for Tech4all.biz",
      },
    ],
  },
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
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID as string} />
      </body>
    </html>
  );
}
