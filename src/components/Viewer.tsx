import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import type { Mesh } from 'three'

type ObjOption = {
  id: string
  name: string
}

const objOptions: ObjOption[] = [
  {
    id: '1zOZiOlniaBKzQhAd9sRYF5W_wjzcqBs-',
    name: 'goblet_twist_sin_stretch_wave',
  },
  {
    id: '1VLX7t2aJi1tJMf93SXRDqurfA1lA1b4T',
    name: 'spindle_twist_wave_height',
  },
  {
    id: '1NZduNMPqs40gL5oN70IaGxRp96jIq1ym',
    name: 'bottle_bulge_center',
  },
  {
    id: '1zn6gi_xDy28JAlZh-uDZPwjYGLSdkjhh',
    name: 'bottle_random_scale_twist_sin',
  },
  {
    id: '1gK3J-AOwziOjTHEHfy9p-6f9jXfilmU2',
    name: 'vase_wobble_bulge_center',
  },
  {
    id: '1E0jdTmLDaApLLCLSsr93-xqojek3L9q-',
    name: 'goblet_squeeze_center',
  },
  {
    id: '1u5vPv9BjlmOe_9KsoD_18sbSNdd2iMCy',
    name: 'vase_twist_sin',
  },
  {
    id: '1AlKXqi_iQtNDokBKmPCBl8Dxr4JfliCq',
    name: 'spindle_bulge_center_offset_center',
  },
  {
    id: '1VqIrMM6vNrbEkS8HDTHqGUK4nhbiViWu',
    name: 'vase_sin_noise',
  },
]

const buildDriveObjUrl = (id: string) => `https://drive.google.com/uc?export=download&id=${id}`

const RotatingSurface = () => {
  const meshRef = useRef<Mesh>(null)

  useFrame((_, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y += delta * 0.4
    meshRef.current.rotation.x += delta * 0.2
  })

  return (
    <mesh ref={meshRef} scale={1.4}>
      <torusKnotGeometry args={[1, 0.35, 220, 32]} />
      <meshStandardMaterial
        color="#8bd5ff"
        metalness={0.2}
        roughness={0.3}
        emissive="#1c3a6d"
        emissiveIntensity={0.35}
      />
    </mesh>
  )
}

const Viewer = () => {
  return (
    <section id="viewer" className="px-6">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Interactive 3D Viewer</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Explore a parametric surface in real time
            </h2>
            <p className="mt-4 text-base text-slate-300">
              Rotate, zoom, and inspect a representative surface function using built-in
              orbit controls. Lighting is tuned for soft highlights on a deep-space canvas.
            </p>
            <div className="mt-6">
              <label className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Available OBJ Files
              </label>
              <div className="mt-2 space-y-2">
                {objOptions.map((option) => (
                  <a
                    key={option.id}
                    href={buildDriveObjUrl(option.id)}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 backdrop-blur transition hover:border-white/30"
                  >
                    {option.name}
                  </a>
                ))}
              </div>
              <p className="mt-3 text-xs text-slate-400">
                Click to download OBJ files from Google Drive. A parametric torus knot is shown as a demo.
              </p>
            </div>
          </div>

          <div className="w-full">
            <div className="rounded-2xl border border-white/10 bg-[#0b0f1a] p-3 shadow-2xl shadow-cyan-500/10">
              <Canvas
                className="h-[360px] w-full rounded-xl"
                camera={{ position: [2.8, 2.2, 3.4], fov: 55 }}
              >
                <ambientLight intensity={0.4} />
                <directionalLight position={[4, 6, 4]} intensity={0.9} />
                <directionalLight position={[-4, -2, -3]} intensity={0.4} color="#3bb1ff" />
                <RotatingSurface />
                <OrbitControls enablePan={false} enableZoom />
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Viewer
