import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero/Hero";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import GridBackground from "@/components/ui/GridBackground";
import MouseGlow from "@/components/ui/MouseGlow";
import About from "@/components/sections/About/About";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090B] text-white">

      <GridBackground />
      <BackgroundGlow />
    <MouseGlow />
      <Navbar />

      <Hero />

    <About />

    </main>
  );
}