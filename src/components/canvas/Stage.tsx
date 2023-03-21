// Description: This is main stage component. It contains all the elements of the scene. It stores 3d molecules and lights.

import { Molecule } from '@/utils/sdfParser'
import Atom from './Atom'

type Props = {
  molecule: Molecule
}

export default function Stage({ molecule }: any) {
  console.log(molecule)
  const [atom1, atom2, atom3] = molecule.atoms
  // remove from atoms symbol property
  const { symbol, ...atom1Position } = atom1
  const { symbol: _, ...atom2Position } = atom2
  const { symbol: __, ...atom3Position } = atom3

  return (
    <>
      <Atom position={atom1Position} size={0.1} color={'red'} />
      <Atom position={atom2Position} size={0.5} color={'blue'} />
      <Atom position={atom3Position} size={0.1} color={'red'} />
    </>
  )
}
