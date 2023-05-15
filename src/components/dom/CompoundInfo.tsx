// simple component to display compound info

import { RootState } from '@/redux/store'
import { useState, useEffect } from 'react'

import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { getMolecule } from '@/utils/firebase'

export default function CompoundInfo() {
  const id = useSelector((state: RootState) => state.searched.value)
  const { data: molecule, isFetching, isFetched } = useQuery({ queryKey: [id], queryFn: () => getMolecule(id) })
  const { atoms, bonds, common_name, weight, ph, inchi, formula } = molecule || {
    atoms: [],
    bonds: [],
    common_name: '',
    temp: '',
    inchi: '',
    ph: '',
  }

  // make inchi max 30 chars
  let inchi_text = inchi?.length > 40 ? inchi?.slice(0, 40) + '...' : inchi

  return (
    <div className='w-full h-full grid bg-background place-items-center'>
      <article className='flex flex-col self-start w-3/4 p-4 border-b-2 rounded-lg h-fit gap-4 border-contrast'>
        <h2 className='px-4 pt-2 text-3xl border-t-2 rounded-lg border-contrast text-purple-primary w-fit text-bold'>
          {common_name}
        </h2>
        <ul className='flex flex-col pl-2 gap-2'>
          <li className='text-paragraph'>
            Formula <span className='text-purple-primary'>{formula}</span>
          </li>
          <li className='text-paragraph'>
            InChI <span className='text-purple-primary'>{inchi_text}</span>
          </li>
          <li className='text-paragraph'>
            Number of atoms <span className='text-purple-primary'>{atoms.length}</span>
          </li>
          <li className='text-paragraph'>
            Number of bonds <span className='text-purple-primary'>{bonds.length}</span>
          </li>
          <li className='text-paragraph'>
            Weight (g/mol) <span className='text-purple-primary'>{weight}</span>
          </li>
          <li className='text-paragraph'>
            pH <span className='text-purple-primary'>{ph}</span>
          </li>
        </ul>
      </article>
    </div>
  )
}
