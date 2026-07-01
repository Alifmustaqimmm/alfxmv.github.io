import BackgroundGlow from "@/components/ui/BackgroundGlow";
import GridBackground from "@/components/ui/GridBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090B] text-white">

      <GridBackground />
      <BackgroundGlow />

      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <h1 className="text-6xl font-bold tracking-tight">
          ALFXMV
        </h1>
      </div>

    </main>
  );
}