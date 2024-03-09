import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/Tech4allBiz_Logo.svg";

export default function NavDesktop() {
  return (
    <nav className="hidden md:flex flex-row justify-between items-center w-full h-[100px]">
      {" "}
      <Link href="/">
        <Image src={Logo} alt="Tech4allBiz Logo" width={150} height={250} />
      </Link>
      <div className="flex flex-row gap-10">
        <Link
          href="/"
          className="hover:underline hover:underline-offset-4 decoration-2 hover:decoration-[#F0C808]"
        >
          Home
        </Link>
        <div>Lessons</div>
        <Link
          href="/"
          className="hover:underline hover:underline-offset-4 decoration-2 hover:decoration-[#F0C808]"
        >
          Free Online Resources
        </Link>
      </div>
    </nav>
  );
}
