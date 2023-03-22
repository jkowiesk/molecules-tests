// make a map of all atoms for showing in r3f

// make hashmap of all atoms for showing in r3f make radius and color

import { AtomInfo } from './types'

export const ATOMS = new Map<string, AtomInfo>(
  Object.entries({
    H: {
      radius: 0.2,
      color: 'white',
    },
    C: {
      radius: 0.45,
      color: 'black',
    },
    O: {
      radius: 0.4,
      color: 'red',
    },
  }),
)

// get ATOMS H element
