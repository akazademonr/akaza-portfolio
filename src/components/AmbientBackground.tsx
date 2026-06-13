export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-500/[0.07] blur-[120px] dark:bg-violet-400/[0.08]" />
      <div className="absolute top-[35%] -left-24 h-[360px] w-[360px] rounded-full bg-blue-500/[0.05] blur-[100px] dark:bg-blue-400/[0.06]" />
      <div className="absolute bottom-[10%] -right-20 h-[320px] w-[320px] rounded-full bg-fuchsia-500/[0.05] blur-[100px] dark:bg-fuchsia-400/[0.06]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.55),transparent_45%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_50%)]" />
    </div>
  )
}
