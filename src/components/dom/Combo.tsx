import { Fragment, useEffect, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { getMolecule, getMolecules } from '@/utils/firebase'
import { useQuery } from '@tanstack/react-query'
import { Molecule, MoleculeID } from '@/utils/types'
import { setSearched } from '@/redux/slices/searched'
import { useDispatch } from 'react-redux'

export default function Combo() {
  const { data: molecules, isFetched } = useQuery({ queryKey: ['molecules'], queryFn: getMolecules })
  const [selected, setSelected] = useState<MoleculeID>({ id: '', common_name: '' })
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()

  let filtered
  if (isFetched) {
    filtered =
      query === ''
        ? molecules
        : molecules.filter((molecules) =>
            molecules.common_name.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, '')),
          )
  } else {
    filtered = []
  }

  useEffect(() => {
    if (isFetched) {
      setSelected(molecules[0])
    }
  }, [isFetched])

  useEffect(() => {
    if (isFetched) {
      dispatch(setSearched(selected.id))
    }
  }, [selected, isFetched])

  return (
    <div className='w-72'>
      <Combobox value={selected} onChange={setSelected}>
        <div className='relative z-10 mt-1'>
          <div className='relative w-full overflow-hidden text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm'>
            <Combobox.Input
              className='w-full py-2 pl-3 pr-10 text-sm text-gray-900 border-none leading-5 focus:ring-0'
              displayValue={(molecule: MoleculeID) => molecule.common_name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className='absolute inset-y-0 right-0 flex items-center pr-2'></Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}>
            <Combobox.Options className='absolute w-full py-1 mt-1 overflow-auto text-base bg-white shadow-lg max-h-60 rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {filtered.length === 0 && query !== '' ? (
                <div className='relative px-4 py-2 text-gray-700 cursor-default select-none'>Nothing found.</div>
              ) : (
                filtered.map((molecule) => (
                  <Combobox.Option
                    key={molecule.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-teal-600 text-white' : 'text-gray-900'
                      }`
                    }
                    value={molecule}>
                    {({ selected, active }) => (
                      <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                        {molecule.common_name}
                      </span>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}
