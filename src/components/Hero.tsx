const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden px-6 pt-20 pb-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-cyan-500/40 via-sky-500/20 to-indigo-500/30 blur-3xl animate-gradient" />
        <div className="absolute bottom-0 right-[-6rem] h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/30 to-cyan-400/10 blur-3xl animate-float" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.75),_rgba(2,6,23,1))]" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="flex flex-col gap-6">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Parametric3D Research Dataset
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            <span className="text-gradient">Parametric3D Dataset</span>
          </h1>
          <h2 className="text-xl font-medium text-slate-200 sm:text-2xl">
            Large-scale synthetic 3D dataset generated from 20 mathematical surface functions
          </h2>
          <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
            Parametric3D delivers 99,603+ precisely aligned meshes, renderings, masks, and depth
            maps from analytically defined surfaces. Designed for high-fidelity 3D vision
            benchmarks, evaluation pipelines, and reproducible research.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#download"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Download Dataset
            </a>
            <a
              href="https://github.com/Ronitjaiswal1/3d_synthetic_dataset"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-white/40"
            >
              View on GitHub
            </a>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { label: 'Objects', value: '99,603+' },
            { label: 'Surface Functions', value: '20' },
            { label: 'Modalities', value: 'OBJ • RGB • Mask • Depth' },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                {item.label}
              </p>
              <p className="mt-3 text-lg font-semibold text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
