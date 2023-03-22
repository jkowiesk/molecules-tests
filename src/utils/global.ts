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
    N: {
      radius: 0.4,
      color: 'blue',
    },
    S: {
      radius: 0.5,
      color: 'yellow',
    },
    P: {
      radius: 0.4,
      color: 'orange',
    },
  }),
)

// get ATOMS H element
