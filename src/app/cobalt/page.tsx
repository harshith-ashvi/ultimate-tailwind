import Container from "@/components/cobalt/container";
import Hero from "@/components/cobalt/hero";
import Navbar from "@/components/cobalt/navbar";

function CobaltHomePage() {
  return (
    <div className="via-neutral-850 flex h-screen flex-col items-center bg-linear-to-b from-cyan-950 via-neutral-900 to-neutral-900">
      <Container>
        <Navbar />
        <Hero />
      </Container>
    </div>
  );
}

export default CobaltHomePage;
