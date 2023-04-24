// Description: This is main stage component. It contains all the elements of the scene. It stores 3d molecules and lights.
import { Molecule } from '@/utils/types'
import Atom from './Atom'
import BondFC from './Bond'
import * as THREE from 'three'
import { useEffect, useRef } from 'react'
import { useThree } from '@react-three/fiber'
import { useQuery } from '@tanstack/react-query'
import { getMolecule } from '@/utils/firebase'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

type Props = {
  molecule?: Molecule
}

export default function Stage() {
  // remove from atoms symbol property
  const moleculeRef = useRef<THREE.Group>()
  const id = useSelector((state: RootState) => state.searched.value)

  const { data: molecule, isFetching, isFetched } = useQuery({ queryKey: [id], queryFn: () => getMolecule(id) })
  const { atoms, bonds } = molecule || { atoms: [], bonds: [] }

  if (isFetching) {
    return <></>
  }

  return (
    <>
      <group ref={moleculeRef}>
        {atoms.map(({ symbol, position }, idx) => (
          <Atom key={idx} position={position} symbol={symbol} />
        ))}
        {bonds.map(({ atom1Idx, atom2Idx }, idx) => {
          const position1 = new THREE.Vector3(...atoms[atom1Idx].position)
          const position2 = new THREE.Vector3(...atoms[atom2Idx].position)

          return <BondFC key={idx} position1={position1} position2={position2} />
        })}
      </group>
    </>
  )
}
