import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Founders", href: "/finta" },
  { label: "Guide", href: "/finta" },
  { label: "Pricing", href: "/finta" },
  { label: "Log In", href: "/finta" },
];

export default function Navbar() {
  return (
    <div className="flex items-center justify-between my-2">
      <Link href="/finta">
        <Image width={68} height={30} src="/finta-logo.svg" alt="finta-logo" />
      </Link>
      <div className="flex items-center justify-center gap-6">
        {navLinks.map((navLink) => (
          <Link
            href={navLink.href}
            key={navLink.label}
            className="text-neutral-800 font-medium text-sm hover:text-neutral-600 transition duration-200 "
          >
            {navLink.label}
          </Link>
        ))}
        <Link
          href="/finta"
          className="bg-[#2579F4] py-2 px-3 text-white rounded-md font-semibold text-sm shadow-lg text-shadow-md tracking-wide hover:bg-[#2262c7]"
        >
          Get started
        </Link>
      </div>
    </div>
  );
}
