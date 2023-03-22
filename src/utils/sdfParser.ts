import { Atom, Bond, Molecule } from './types'

// Make sdf file parser to Molecule that contain atoms coordinates and bonds
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

      // parse line
      const x = parseFloat(line[0])
      const y = parseFloat(line[1])
      const z = parseFloat(line[2])

      const position: [number, number, number] = [x, y, z]
      const symbol = line[3]

      atoms.push({ position, symbol })
    } else {
      const atom1Idx = parseInt(line[0]) - 1
      const atom2Idx = parseInt(line[1]) - 1
      const order = parseInt(line[2])

      bonds.push({ atom1Idx, atom2Idx, order })
    }
  }

  return { atoms, bonds }
}
