export default function BackgroundGlow() {
  return (
    <>
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/15 blur-[180px]" />

      <div className="absolute -bottom-20 right-0 h-[450px] w-[450px] rounded-full bg-violet-500/15 blur-[180px]" />

      <div className="absolute left-0 top-1/2 h-[350px] w-[350px] rounded-full bg-cyan-400/10 blur-[180px]" />
    </>
  );
}