"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./icons";
import { useTheme } from "next-themes";

function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [systemTheme, setSystemTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemTheme(mediaQuery.matches ? "dark" : "light");

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(mediaQuery.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const handleThemeSwitch = () => {
    switch (theme) {
      case "light":
        setTheme("dark");
        return;
      case "dark":
        setTheme("light");
        return;
      case "system":
        setTheme("system");
        return;
    }
  };

  return (
    <button
      onClick={handleThemeSwitch}
      className="absolute inset-0 m-auto flex size-8 items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-600"
    >
      <SunIcon className="absolute inset-0 m-auto size-4 shrink-0 scale-100 text-neutral-500 transition-all duration-300 dark:scale-0 dark:rotate-45" />
      <MoonIcon className="absolute inset-0 m-auto size-4 shrink-0 scale-0 rotate-45 transition-all duration-300 dark:scale-100 dark:rotate-0 dark:text-neutral-200" />
    </button>
  );
}

export default ModeToggle;
