import React from "react";

function Hero() {
  return (
    <div className="mx-auto mt-32 flex w-full max-w-3xl flex-col items-center">
      <h1 className="font-cobalt bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-7xl leading-tight font-bold tracking-tight text-transparent">
        Unleash the power of intuitive finance
      </h1>
      <p className="mt-8 text-center text-xl font-medium text-neutral-400 selection:bg-cyan-100">
        Say goodbye to the outdated financial tools. Every small business owner,
        regardless of the background, can now manage their business like a pro.
        Simple. Intuitive. And never boring.
      </p>
      <div className="mt-4">
        <button className="relative cursor-pointer rounded-4xl border border-neutral-700 px-4 py-2 text-sm text-neutral-400">
          <div className="absolute inset-x-0 bottom-0 h-px w-full bg-linear-to-r from-transparent via-sky-600 to-transparent" />
          Join the waitlist
        </button>
      </div>
    </div>
  );
}

export default Hero;
