"use client";

import React, { useState } from "react";
import Image from "next/image";
import MobileLogo from "@/public/Mobile_Logo.svg";
import Link from "next/link";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative md:hidden">
      {/* Hamburger Icon and Logo */}
      <div className="flex justify-between items-center py-4">
        <Link href="/">
          <Image src={MobileLogo} alt="MobileLogo" className="h-14 w-14" />
        </Link>
        <button type="button" onClick={toggleSidebar}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${isOpen ? "translate-x-0" : "translate-x-full"} fixed right-0 top-0 w-64 h-full bg-[#117D9C] text-white transform transition-transform duration-300 ease-in-out`}
      >
        {/* Close Button */}
        <button onClick={closeSidebar} className="absolute top-0 right-0 p-4">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col gap-y-5 px-5 py-20">
          <Link href="/">Home</Link>
          <Link href="/#lessons">Lessons</Link>

          <a href="#">Free Online Resources</a>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
