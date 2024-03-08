import Link from "next/link";

export default function NavDesktop() {
  return (
    <nav className="flex flex-row justify-between items-center w-full h-[100px]">
      <div>tech4allbiz</div>
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
