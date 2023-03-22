import { parseSdf } from '@/utils/sdfParser'
import fs from 'fs'
import dynamic from 'next/dynamic'

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49

const Stage = dynamic(() => import('@/components/canvas/Stage'), { ssr: false })

// Dom components go here
export default function Page(props) {
  return <span></span>
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = (props) => {
  return <Stage {...props} />
}

export async function getStaticProps({ params }: any) {
  try {
    const sdf = fs.readFileSync(`./public/molecules/${params.fileName}.sdf`, 'utf8')
    const molecule = parseSdf(sdf)

    return { props: { title: 'Main', molecule } }
  } catch (e) {
    console.log(e)
    return { notFound: true }
  }
}
export async function getStaticPaths() {
  const files = fs.readdirSync('./public/molecules')
  const fileNames = files.map((file) => file.replace('.sdf', ''))

  const paths = fileNames.map((fileName) => ({ params: { fileName } }))

  return { paths, fallback: false }
}
