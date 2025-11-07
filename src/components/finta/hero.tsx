import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="px-4 py-2 w-full mx-auto flex flex-col items-center my-12">
      <Link
        href="/finta"
        className="flex items-center gap-1 tracking-tight bg-[#1e1f250a] w-fit rounded-2xl my-8 px-2 py-1 font-semibold text-xs text-neutral-800 hover:bg-[#1e1f251f] cursor-pointer border-neutral-200 border transition duration-200"
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
      <div className="max-w-xl mt-2">
        <h1 className="text-6xl text-center font-medium tracking-tighter">
          Magically simplify accounting and taxes
        </h1>
        <p className="text-center text-neutral-600 font-medium text-normal my-4">
          Automated bookkeeping, effortless tax filing, real‑time insights.{" "}
          <br />
          Set up in 10 mins. Back to building by 11:01pm.
        </p>

        <div className="flex items-center justify-center gap-2 my-6">
          <Link
            href="/finta"
            className="bg-[#2579F4] py-2 px-3 text-white rounded-md font-semibold text-sm shadow-lg text-shadow-md tracking-wide hover:bg-[#2262c7]"
          >
            Get started
          </Link>
          <Link
            href="/finta"
            className="flex items-center gap-1 hover:bg-[#1e1f251f] transition duration-200 p-2 rounded-md"
          >
            <p className="font-semibold text-sm">Pricing</p>
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

        <p className="text-neutral-400 text-xs text-center">
          For US-based C-Corps, LLCs, and PBCs.
        </p>
      </div>
    </div>
  );
}

export default Hero;
