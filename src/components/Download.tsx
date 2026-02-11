const chunks = [
  {
    label: 'chunk_00',
    count: 9985,
    url: 'https://drive.google.com/drive/folders/1cFbEmbc8khfdy-_xwo4p794CGXD7g8KB?usp=drive_link',
  },
  {
    label: 'chunk_01',
    count: 10006,
    url: 'https://drive.google.com/drive/folders/1y7Bn0u-RyTRcxl2MELCLlKTMA_xDD4eZ?usp=drive_link',
  },
  {
    label: 'chunk_02',
    count: 8829,
    url: 'https://drive.google.com/drive/folders/1FhGaAbSUiOq6QLfaLYv8-iSiV7w0yqEA?usp=drive_link',
  },
  {
    label: 'chunk_03',
    count: 10000,
    url: 'https://drive.google.com/drive/folders/1qhP0Mn57MXxfoP1g1PCwvlApycnp_0Qu?usp=drive_link',
  },
  {
    label: 'chunk_04',
    count: 10000,
    url: 'https://drive.google.com/drive/folders/13-_1aXSitOhO03iLYVlmTt_TK0XLCGSU?usp=drive_link',
  },
  {
    label: 'chunk_05',
    count: 784,
    url: 'https://drive.google.com/drive/folders/1sqI_BW9wP3Qo54D4Cp4iJ60jYIV0BnSm?usp=drive_link',
  },
]

const Download = () => {
  return (
    <section id="download" className="px-6">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Download</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Dataset chunks</h2>
            <p className="mt-4 max-w-2xl text-base text-slate-300">
              3D_Dataset_1 is divided into 6 chunks (49,604 objects total). Each chunk includes OBJ meshes, RGB images, binary masks, and depth maps.
            </p>
          </div>
          <a
            href="https://drive.google.com/drive/folders/1yrN9fln7x9DJzyIIU_AoEhxl85g41Jad?usp=drive_link"
            className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-semibold text-white backdrop-blur transition hover:border-white/40"
          >
            Download All
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {chunks.map((chunk) => (
            <div
              key={chunk.label}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Archive</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{chunk.label}</h3>
                <p className="mt-2 text-lg font-medium text-cyan-300">{chunk.count.toLocaleString()} objects</p>
                <p className="mt-3 text-sm text-slate-300">
                  OBJ • RGB • Mask • Depth per object from 20 surface functions.
                </p>
              </div>
              <a
                href={chunk.url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Download
