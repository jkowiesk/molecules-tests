import { parseSdf } from '@/utils/sdfParser'
import fs from 'fs'
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
    <div className='fixed w-[100vw] h-[100vh] grid place-items-center'>
      <div>
        <h1 className='text-xl text-gray-200'>Available molecules: </h1>
        <ul>
          {props.fileNames.map((path, idx) => (
            <li className='hover:text-red-400' key={idx}>
              <Link href={path}>{path}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = (props) => {
  return <></>
}

export async function getStaticProps() {
  const files = fs.readdirSync('./public/molecules')
  const fileNames = files.map((file) => file.replace('.sdf', ''))

  return { props: { title: 'Main', fileNames } }
}
