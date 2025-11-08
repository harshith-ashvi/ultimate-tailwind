import Container from "@/components/finta/container";
import Hero from "@/components/finta/hero";
import Navbar from "@/components/finta/navbar";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center [background:radial-gradient(125%_100%_at_50%_0%,#FFF_6.32%,#E0F0FF_29.28%,#E7EFFD_68.68%,#FFF_100%)]">
      <div className="absolute inset-0 mx-auto h-full w-full max-w-5xl">
        <div className="absolute inset-y-0 left-[-6] h-full w-px bg-linear-to-b from-neutral-300/50 via-neutral-200 to-transparent" />
        <div className="absolute inset-y-0 right-[-6] h-full w-px bg-linear-to-b from-neutral-300/50 via-neutral-200 to-transparent" />
      </div>
      <Container className="z-1">
        <Navbar />
        <Hero />
      </Container>
      <div className="relative w-full">
        <div className="pointer-events-none absolute inset-x-0 z-1 h-px w-full bg-linear-to-b from-neutral-300/50 via-neutral-200 to-transparent" />
      </div>
      <div className="mx-auto max-w-7xl p-4">
        <Image
          width={1000}
          height={1000}
          src="/finta-hero-wallpaper.webp"
          alt="hero-wallpaper"
          className="rounded-2xl border-neutral-200 to-100% mask-b-from-0 object-cover object-top-left shadow-md"
        />
      </div>
    </div>
  );
}
