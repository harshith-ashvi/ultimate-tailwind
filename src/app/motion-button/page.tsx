"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const MotionButton = () => {
  return (
    <div
      className={cn(
        "flex h-screen w-full items-center justify-center bg-neutral-900",
        "bg-[radial-gradient(var(--color-neutral-700)_1px,transparent_1px)]",
        "bg-size-[20px_20px]",
        "[perspective::1000px] transform-3d",
      )}
    >
      <motion.button
        className="group relative cursor-pointer rounded-lg bg-black px-8 py-4 text-neutral-200 shadow-[0px_1px_4px_0pxrgb(255,255,255,0.1)_inset0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]"
        // initial={{ rotate: 0 }}
        // animate={{ rotate: [0, 40, 0] }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        whileHover={{
          rotateX: 25,
          rotateY: 10,
          boxShadow: "0px 20px 50px rgba(8,112,184,0.7)",
        }}
        style={{ translateZ: 100 }}
      >
        <span className="transition-colors duration-300 group-hover:text-cyan-500">
          Subscribe
        </span>
        <span className="absolute inset-x-0 bottom-px mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="absolute inset-x-0 bottom-px mx-auto h-1 w-full bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
      </motion.button>
    </div>
  );
};

export default MotionButton;
