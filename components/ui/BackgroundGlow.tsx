export default function BackgroundGlow() {
  return (
    <>
      {/* Blue Glow */}
      <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[150px]" />

      {/* Purple Glow */}
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-violet-500/20 blur-[150px]" />

      {/* Cyan Glow */}
      <div className="absolute left-0 top-1/2 h-[350px] w-[350px] rounded-full bg-cyan-400/10 blur-[150px]" />
    </>
  );
}