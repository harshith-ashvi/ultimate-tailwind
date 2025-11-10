"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/home" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      <div className="pt-0 md:pt-4" />
      <div className="shadow-input p4 mx-auto flex max-w-4xl items-center justify-between border border-neutral-200 bg-white md:rounded-4xl">
        <Image
          src="https://ui.aceternity.com/logo.png"
          alt="logo"
          width={50}
          height={50}
          className="rounded-4xl p-2"
        />
        <div className="mr-10 hidden items-center gap-4 md:flex">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.label}
              className="font-medium text-neutral-600 hover:text-neutral-900"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          className="mr-4 flex md:hidden"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu-icon lucide-menu"
          >
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
          </svg>
        </button>
      </div>
      {isExpanded && (
        <div className="mx-2 mt-1 flex flex-col items-start gap-2 rounded bg-white p-2 md:hidden">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.label}
              className="font-medium text-neutral-600"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
