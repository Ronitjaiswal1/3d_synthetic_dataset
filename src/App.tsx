import Download from './components/Download'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Viewer from './components/Viewer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Hero />
      <main className="space-y-20 pb-20">
        <Overview />

        <section id="structure" className="px-6">
          <div className="mx-auto w-full max-w-6xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                  Dataset Structure
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Organized for scalable research workflows
                </h2>
                <p className="mt-4 text-base text-slate-300">
                  The dataset is organized into two main folders (3D_Dataset_1 and 3D_Dataset_2) with 99,603+ objects total. 
                  Every asset is grouped by modality for fast retrieval and streaming at scale.
                </p>
              </div>
              <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <pre className="text-sm text-slate-200">
{`3D_Dataset_1/    (49,604 objects - chunked)
├── chunk_00/
├── chunk_01/
├── ...
└── chunk_05/

3D_Dataset_2/    (49,999 objects)
├── obj/
├── img/
├── mask/
├── depth/
└── manifest.csv`}
                </pre>
                <p className="mt-4 text-sm text-slate-400">
                  Each dataset contains OBJ meshes, RGB images, binary masks, and depth maps aligned per object 
                  across 20 parametric surface functions. 3D_Dataset_1 is chunked for distributed access.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Viewer />

        <Download />

        <section id="research" className="px-6">
          <div className="mx-auto w-full max-w-6xl rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900/80 via-slate-900/30 to-slate-900/80 p-10 backdrop-blur">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                  Research Use
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Benchmarks built for modern 3D intelligence
                </h2>
                <p className="mt-4 text-base text-slate-300">
                  Parametric3D is built to stress-test geometry understanding at scale. Use
                  it to train, evaluate, and compare models across vision and geometry tasks.
                </p>
              </div>
              <div className="grid w-full max-w-xl gap-3 text-sm text-slate-200 sm:grid-cols-2">
                {[
                  'Monocular Depth Estimation',
                  '3D Reconstruction',
                  'Shape Classification',
                  'Surface Normal Estimation',
                  'Domain Adaptation Research',
                ].map((task) => (
                  <div
                    key={task}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    {task}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
