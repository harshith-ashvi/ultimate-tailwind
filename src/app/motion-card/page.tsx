"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

import { CloseIcon } from "@/components/bento/icons";
import { cn } from "@/lib/utils";
import {
  ClaudeLogo,
  GeminiLogo,
  MetaIconOutline,
  OpenAILogo,
} from "../dark-light/page";

const MotionCard = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={cn(
              "flex h-screen w-full items-center justify-center bg-gray-50",
            )}
          >
            <div
              className={cn(
                "flex h-112 min-h-104 w-80 flex-col rounded-xl bg-white p-6",
                "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
              )}
            >
              <h6 className="mb-4 font-bold tracking-tight text-neutral-900">
                Aceternity UI Components
              </h6>
              <p className="text-[12px] font-medium tracking-tight text-neutral-400">
                A collection of UI components for your project, get on with it.
              </p>
              <div className="flex items-center justify-center">
                <button
                  className={cn(
                    "mt-4 flex items-center justify-center gap-2 rounded-md px-2 py-1",
                    "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
                  )}
                  onClick={() => setOpen(false)}
                >
                  <Image
                    src="https://ui.aceternity.com/logo.png"
                    alt="logo"
                    width={20}
                    height={20}
                    className="rounded-md"
                  />
                  <p className="font-sm text-[14px]">Aceternity</p>
                  <CloseIcon className="mt-0.5 size-4 cursor-pointer text-neutral-400" />
                </button>
              </div>
              <div className="relative mt-4 flex-1 rounded-lg border border-dashed border-neutral-200 bg-gray-100">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                  whileHover={{ opacity: 1, scale: 1.05, filter: "blur(0px)" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute inset-0 h-full w-full divide-y divide-neutral-200 rounded-lg border border-neutral-200 bg-white"
                >
                  <div className="flex gap-2 p-4">
                    <div className="flex-shrik-0 flex size-7 items-center justify-center rounded-md bg-white bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                      <MetaIconOutline className="size-4 text-neutral-800" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[10px] font-bold text-neutral-600">
                        Meta AI Components
                      </p>
                      <p className="mt-1 text-[10px] text-neutral-400">
                        A collection of UI components
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 p-4">
                    <div className="flex-shrik-0 flex size-7 items-center justify-center rounded-md bg-white bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                      <ClaudeLogo className="size-4 text-neutral-800" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[10px] font-bold text-neutral-600">
                        Claude AI Components
                      </p>
                      <p className="mt-1 text-[10px] text-neutral-400">
                        A collection of UI components
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 p-4">
                    <div className="flex-shrik-0 flex size-7 items-center justify-center rounded-md bg-white bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                      <GeminiLogo className="size-4 text-neutral-800" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[10px] font-bold text-neutral-600">
                        Gemini AI Components
                      </p>
                      <p className="mt-1 text-[10px] text-neutral-400">
                        A collection of UI components
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 p-4">
                    <div className="flex-shrik-0 flex size-7 items-center justify-center rounded-md bg-white bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                      <OpenAILogo className="size-4 text-neutral-800" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[10px] font-bold text-neutral-600">
                        OpenAI Components
                      </p>
                      <p className="mt-1 text-[10px] text-neutral-400">
                        A collection of UI components
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MotionCard;
