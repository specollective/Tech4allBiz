"use client";

import React, { useState } from "react";
import Image from "next/image";
import MobileLogo from "@/public/Mobile_Logo.svg";
import Link from "next/link";

const styles = {
  container: "relative md:hidden",
  header: "flex justify-between items-center py-4",
  logo: "h-14 w-14",
  hamburgerIcon: "w-6 h-6",
  sidebar:
    "fixed right-0 top-0 w-64 h-full bg-[#117D9C] text-white transform transition-transform duration-300 ease-in-out",
  sidebarOpen: "translate-x-0",
  sidebarClosed: "translate-x-full",
  closeButton: "absolute top-0 right-0 p-4 ",
  closeButtonIcon: "w-6 h-6",
  navItems: "flex flex-col gap-y-5 pl-12 py-20",
  overlay: "fixed inset-0 bg-[#117D9C] bg-opacity-40 z-1",
};

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/">
          <Image src={MobileLogo} alt="Mobile Logo" className={styles.logo} />
        </Link>
        <button
          type="button"
          onClick={toggleSidebar}
          className={styles.hamburgerIcon}
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isOpen && <div className={styles.overlay} onClick={closeSidebar}></div>}

      <div
        className={`${isOpen ? styles.sidebarOpen : styles.sidebarClosed} ${styles.sidebar}`}
      >
        <button
          type="button"
          onClick={closeSidebar}
          className="absolute top-0 right-0 rounded-md p-6 text-white"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className={styles.navItems}>
          <Link href="/">Home</Link>
          <Link href="/#lessons">Lessons</Link>
          <Link href="/online-resources">Free Online Resources</Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
