import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/Tech4allBiz_Logo.svg";

const styles = {
  navContainer:
    "hidden md:flex flex-row justify-between items-center w-full h-[100px]",
  linkContainer: "flex flex-row gap-10",
  linkStyle:
    "hover:underline hover:underline-offset-4 decoration-2 hover:decoration-[#F0C808]",
};

export default function NavDesktop() {
  return (
    <nav className={styles.navContainer}>
      <Link href="/">
        <Image src={Logo} alt="Tech4allBiz Logo" width={150} height={250} />
      </Link>
      <div className={styles.linkContainer}>
        <Link href="/" className={styles.linkStyle}>
          Home
        </Link>
        <Link href="/#lessons" className={styles.linkStyle}>
          Lessons
        </Link>
        <Link href="/" className={styles.linkStyle}>
          Free Online Resources
        </Link>
      </div>
    </nav>
  );
}
