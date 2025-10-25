import Spline from '@splinetool/react-spline';

function Hero3D() {
  return (
    <div className="relative h-[560px] w-full overflow-hidden">
      <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/10 to-transparent" />
      <div className="absolute inset-x-0 top-10 flex flex-col items-center text-center px-4">
        <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-slate-900/50 px-3 py-1 text-xs text-cyan-200 shadow-md backdrop-blur">
          Iridescent Identity Theme
        </span>
        <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-fuchsia-300">
          Discover and Host Akathons
        </h2>
        <p className="mt-3 max-w-2xl text-slate-300">
          A modern hub for students seeking akathons and conductors organizing events. Explore nearby, online, or offline opportunities.
        </p>
      </div>
    </div>
  );
}

export default Hero3D;
