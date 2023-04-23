// make fixed frame that covers whole screen, has simple header in right corner
import { useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { setCamera } from '@/redux/slices/camera'

const cameras = [
  { id: 0, name: 'perspective', display: 'Perspective' },
  { id: 1, name: 'orthographic', display: 'Orthographic' },
]

export default function Frame() {
  const [selectedCamera, setSelectedCamera] = useState(cameras[0])
  const dispatch = useDispatch()
  const selectCamera = (newCamera) => {
    setSelectedCamera(newCamera)
    dispatch(setCamera(newCamera.name))
  }

  return (
    <div className='fixed w-32 p-2 bg-green-200 top-[90%] right-16 h-fit rounded-xl'>
      <Listbox as='section' className='flex flex-col justify-center' value={selectedCamera} onChange={selectCamera}>
        <Listbox.Button>{selectedCamera.display}</Listbox.Button>
        <Transition
          enter='transition duration-100 ease-out'
          enterFrom='transform scale-95 opacity-0'
          enterTo='transform scale-100 opacity-100'
          leave='transition duration-75 ease-out'
          leaveFrom='transform scale-100 opacity-100'
          leaveTo='transform scale-95 opacity-0'>
          <Listbox.Options className='flex flex-col items-center'>
            {cameras.map((camera) => (
              <Listbox.Option className='cursor-pointer w-fit ui-active:bg-blue-500' key={camera.id} value={camera}>
                {camera.display}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  )
}
