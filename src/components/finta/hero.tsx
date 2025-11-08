import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="mx-auto my-12 flex w-full flex-col items-center px-4 py-2">
      <Link
        href="/finta"
        className="my-8 flex w-fit cursor-pointer items-center gap-1 rounded-2xl border border-neutral-200 bg-[#1e1f250a] px-2 py-1 text-xs font-semibold tracking-tight text-neutral-800 transition duration-200 hover:bg-[#1e1f251f]"
      >
        <p>We're hiring Founding Ruby Engineers</p>
        <svg width="16" height="16" fill="none">
          <path
            stroke="#1E1F25"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity=".5"
            strokeWidth="1.25"
            d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
          ></path>
        </svg>
      </Link>
      <div className="mt-2 max-w-xl">
        <h1 className="text-center text-6xl font-medium tracking-tighter">
          Magically simplify accounting and taxes
        </h1>
        <p className="text-normal my-4 text-center font-medium text-neutral-600">
          Automated bookkeeping, effortless tax filing, real‑time insights.{" "}
          <br />
          Set up in 10 mins. Back to building by 11:01pm.
        </p>

        <div className="my-6 flex items-center justify-center gap-2">
          <Link
            href="/finta"
            className="rounded-md bg-[#2579F4] px-3 py-2 text-sm font-semibold tracking-wide text-white shadow-lg text-shadow-md hover:bg-[#2262c7]"
          >
            Get started
          </Link>
          <Link
            href="/finta"
            className="flex items-center gap-1 rounded-md p-2 transition duration-200 hover:bg-[#1e1f251f]"
          >
            <p className="text-sm font-semibold">Pricing</p>
            <svg width="16" height="16" fill="none">
              <path
                stroke="#1E1F25"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeOpacity=".5"
                strokeWidth="1.25"
                d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
              ></path>
            </svg>
          </Link>
        </div>

        <p className="text-center text-xs text-neutral-400">
          For US-based C-Corps, LLCs, and PBCs.
        </p>
      </div>
    </div>
  );
}

export default Hero;
