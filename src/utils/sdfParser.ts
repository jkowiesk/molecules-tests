// Make sdf file parser to Molecule that contain atoms coordinates and bonds
import * as fs from 'fs'

type Atom = {
  symbol: string
  x: number
  y: number
  z: number
}

type Bond = {
  atom1: number
  atom2: number
  order: number
}

type Molecule = {
  atoms: Atom[]
  bonds: Bond[]
}

export function parseSdf(sdf: string): Molecule {
  // remove empty lines  lines and remove 2 first lines
  const lines = sdf
    .split('\n')
    .filter((line) => line !== '')
    .slice(2)

  const atoms: Atom[] = []
  const bonds: Bond[] = []
  let passedLines = 0

  // Parse atom and bond data
  for (let rawLine of lines) {
    if (rawLine === 'M  END') {
      break
    }
    // remove spaces and convert string to array
    const line = rawLine
      .replace(/\s+/g, ' ')
      .split(' ')
      .filter((x) => x !== '')

    // check if line has any letters
    if (/[a-zA-Z]/.test(rawLine)) {
      // it is atom line now parse it to atom object

      // parse a to float
      const a = parseFloat(line[0])
      // parse line
      const x = parseFloat(line[0])
      const y = parseFloat(line[1])
      const z = parseFloat(line[2])
      const symbol = line[3]

      atoms.push({ x, y, z, symbol })
    } else {
      const atom1 = parseInt(line[0]) - 1
      const atom2 = parseInt(line[1]) - 1
      const order = parseInt(line[2])

      bonds.push({ atom1, atom2, order })
    }
  }

  return { atoms, bonds }
}
