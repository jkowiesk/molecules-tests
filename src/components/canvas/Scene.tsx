import { Canvas } from '@react-three/fiber'
import { OrbitControls, OrthographicCamera, PerspectiveCamera, Preload } from '@react-three/drei'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

export default function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  const [ortho, setOrtho] = useState(false)
  const camera = useSelector((state: RootState) => state.camera.value)

  useEffect(() => {
    setOrtho(camera === 'orthographic')
  }, [camera])

  return (
    <Canvas camera={{ fov: 100, near: 0.1, far: 1000 }}>
      {/* @ts-ignore*/}
      <PerspectiveCamera position={[0, 0, 15]} near={0.1} far={1000} fov={100} makeDefault={!ortho} />
      {/* @ts-ignore*/}
      <OrthographicCamera position={[0, 0, 15]} near={0.1} zoom={100} far={1000} makeDefault={ortho} />
      <directionalLight intensity={1} position={[1, 1, 0]} />
      <ambientLight intensity={0.1} />
      {children}
      <OrbitControls />
      <Preload all />
    </Canvas>
  )
}
