const Footer = () => {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-white">Parametric3D: A Large-Scale Synthetic 3D Dataset</p>
          <p className="mt-2">Authors: Ronit Jaiswal et al.</p>
          <p>Faculty of Technology, University of Delhi</p>
          <p>Supervisor: Dr. Sangita Yadav</p>
        </div>
        <a
          href="https://github.com/Ronitjaiswal1/3d_synthetic_dataset"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white backdrop-blur transition hover:border-white/40"
        >
          GitHub
        </a>
      </div>
    </footer>
  )
}

export default Footer
