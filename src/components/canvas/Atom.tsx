import { ATOMS } from '@/utils/atoms'
import { AtomInfo } from '@/utils/types'

type Props = {
  position: [number, number, number]
  symbol: string
}

export default function Atom({ position, symbol }: Props) {
  const { radius, color }: AtomInfo = ATOMS.get(symbol)

  return (
    <>
      <mesh position={position}>
        <sphereGeometry args={[radius * (4 / 5), 30, 30]} />
        <meshLambertMaterial color={color} />
      </mesh>
    </>
  )
}
