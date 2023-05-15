import Combo from '@/components/dom/Combo'
import CompoundInfo from '@/components/dom/CompoundInfo'
import dynamic from 'next/dynamic'
import Link from 'next/link'

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49

const Stage = dynamic(() => import('@/components/canvas/Stage'), { ssr: false })

// Dom components go here
export default function Page(props) {
  return (
    <>
      <div className='w-full col-span-3 from-black to-background bg-gradient-to-b grid place-items-center'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-4xl text-headline'>Search...</h1>
          <Combo />
        </div>
      </div>
      <CompoundInfo />
    </>
  )
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = (props) => {
  return <Stage />
}
