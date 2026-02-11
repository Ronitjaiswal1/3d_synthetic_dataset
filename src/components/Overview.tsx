const overviewItems = [
  {
    title: 'Total Objects',
    value: '99,603+',
    description: 'Spanning 3D_Dataset_1 (49,604) and 3D_Dataset_2 (49,999) with balanced distribution across surface categories.',
  },
  {
    title: '20 Mathematical Surface Functions',
    value: 'Parametric Set',
    description: 'Analytical functions with controlled curvature, symmetry, and topology.',
  },
  {
    title: 'Exact Pixel-Level Depth Maps',
    value: 'Ground Truth',
    description: 'Depth rendered directly from surface equations for zero-noise supervision.',
  },
  {
    title: 'OBJ Mesh + RGB + Mask + Depth',
    value: '4 Modalities',
    description: 'Aligned assets for multi-task learning and cross-modal evaluation.',
  },
  {
    title: 'Multi-view Projections (x, y, z)',
    value: 'Orthographic',
    description: 'Consistent axis-aligned projections enable robust 3D reasoning.',
  },
  {
    title: 'Chunked Storage Architecture',
    value: 'Efficient IO',
    description: 'Designed for fast streaming and parallelized training workloads.',
  },
]

const Overview = () => {
  return (
    <section id="overview" className="px-6">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Dataset Overview</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">What makes Parametric3D unique</h2>
          </div>
          <p className="hidden max-w-md text-sm text-slate-400 lg:block">
            High-fidelity assets for AI researchers who need deterministic geometry, clean
            modality alignment, and reproducible baselines.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {overviewItems.map((item) => (
            <div
              key={item.title}
              className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{item.title}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{item.value}</h3>
                <p className="mt-4 text-sm text-slate-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Overview
