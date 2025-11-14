import Image from "next/image";

import { cn } from "@/lib/utils";

function ImageEffect() {
  return (
    <div className="mx-auto flex h-screen max-w-4xl items-center">
      <div
        className={cn(
          "flex min-h-100 w-full flex-col items-center justify-center rounded-2xl bg-neutral-100 p-8 dark:bg-neutral-800",
          "bg-[radial-gradient(var(--color-neutral-200)_1px,transparent_1px)]",
          "dark:bg-[radial-gradient(var(--color-neutral-700)_1px,transparent_1px)]",
          "bg-size-[10px_10px]",
          "group",
        )}
      >
        <h2
          className={cn(
            "my-2 text-2xl font-bold tracking-tight",
            "bg-linear-to-r from-purple-600 via-blue-600 to-red-600 bg-clip-text text-transparent text-shadow-2xs dark:text-neutral-100 dark:text-shadow-neutral-800",
          )}
        >
          Image 2D Effect from Ultimate Tailwind
        </h2>
        <p className="font-md my-2 mb-4 max-w-lg bg-linear-to-b from-neutral-800 to-neutral-400 bg-clip-text text-center text-transparent dark:from-neutral-100 dark:to-neutral-400">
          Hover over the image below to see a smooth 3D transformation effecr.
          The card rotates and scales using css transforms and Tailwind's
          built-in classes
        </p>
        <div
          className={cn(
            "size-60 rounded-2xl border border-neutral-200 bg-neutral-100 transition-all duration-200 group-hover:border-neutral-200 group-hover:bg-neutral-200 dark:border-neutral-600 dark:bg-neutral-800 dark:group-hover:border-neutral-600 dark:group-hover:bg-neutral-700",
            "bg-[radial-gradient(var(--color-neutral-300)_1px,transparent_1px)]",
            "dark:bg-[radial-gradient(var(--color-neutral-600)_1px,transparent_1px)]",
            "bg-size-[10px_10px]",
            "relative shadow-2xl perspective-distant",
          )}
        >
          <Image
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
            width={500}
            height={500}
            className={cn(
              "h-full w-full rounded-2xl object-cover object-top",
              "translate-z-20 rotate-x-30 -rotate-y-30 rotate-z-30 transform",
              "group-hover:translate-z-0 group-hover:scale-90 group-hover:rotate-x-0 group-hover:rotate-y-0 group-hover:rotate-z-0",
              "transition-transform duration-300 ease-in-out",
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default ImageEffect;
