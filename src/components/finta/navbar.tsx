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
    <div className="my-2 flex items-center justify-between">
      <Link href="/finta">
        <Image width={68} height={30} src="/finta-logo.svg" alt="finta-logo" />
      </Link>
      <div className="flex items-center justify-center gap-6">
        {navLinks.map((navLink) => (
          <Link
            href={navLink.href}
            key={navLink.label}
            className="text-sm font-medium text-neutral-800 transition duration-200 hover:text-neutral-600"
          >
            {navLink.label}
          </Link>
        ))}
        <Link
          href="/finta"
          className="rounded-md bg-[#2579F4] px-3 py-2 text-sm font-semibold tracking-wide text-white shadow-lg text-shadow-md hover:bg-[#2262c7]"
        >
          Get started
        </Link>
      </div>
    </div>
  );
}
