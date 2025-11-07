import Container from "@/components/finta/container";
import Hero from "@/components/finta/hero";
import Navbar from "@/components/finta/navbar";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center w-full h-screen relative [background:radial-gradient(125%_100%_at_50%_0%,#FFF_6.32%,#E0F0FF_29.28%,#E7EFFD_68.68%,#FFF_100%)]">
      <div className="max-w-5xl mx-auto absolute inset-0 h-full w-full">
        <div className="absolute inset-y-0 left-[-6] h-full w-px bg-linear-to-b from-neutral-300/50 via-neutral-200 to-transparent" />
        <div className="absolute inset-y-0 right-[-6] h-full w-px bg-linear-to-b from-neutral-300/50 via-neutral-200 to-transparent" />
      </div>
      <Container className="z-1">
        <Navbar />
        <Hero />
      </Container>
      <div className="relative w-full">
        <div className="absolute inset-x-0 h-px w-full bg-linear-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-1" />
      </div>
      <div className="max-w-7xl mx-auto p-4">
        <Image
          width={1000}
          height={1000}
          src="/finta-hero-wallpaper.webp"
          alt="hero-wallpaper"
          className="rounded-2xl object-cover object-top-left border-neutral-200 shadow-md mask-b-from-0 to-100%"
        />
      </div>
    </div>
  );
}
