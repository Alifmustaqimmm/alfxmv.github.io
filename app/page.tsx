import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import GridBackground from "@/components/ui/GridBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090B] text-white">

      <GridBackground />
      <BackgroundGlow />

      <Navbar />

      <Hero />

    </main>
  );
}