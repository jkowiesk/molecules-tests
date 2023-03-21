import { Molecule } from '@/utils/sdfParser'

type Props = {
  position: { x: number; y: number; z: number }
  size: number
  color: string
}

export default function Atom({ position: { x, y, z }, size, color }: Props) {
  return (
    <>
      <mesh position={[x, y, z]}>
        <sphereGeometry args={[size, 30, 30]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </>
  )
}
