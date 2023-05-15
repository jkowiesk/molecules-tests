import { useRef } from 'react'
import dynamic from 'next/dynamic'
import Header from '@/config'
import Layout from '@/components/dom/Layout'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import '@/styles/index.css'
import Frame from '@/components/dom/Frame'
import Nav from '@/components/dom/Nav'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: true })

const queryClient = new QueryClient()

export default function App({ Component, pageProps = { title: 'index', isScroll: false } }) {
  const ref = useRef()
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Nav />
        <Header title={pageProps.title} />
        <main className='w-screen h-screen pt-24 grid grid-rows-[30vh_1fr] grid-cols-3'>
          <Component {...pageProps} />
          <Layout className='' ref={ref}>
            {/* The canvas can either be in front of the dom or behind. If it is in front it can overlay contents.
             * Setting the event source to a shared parent allows both the dom and the canvas to receive events.
             * Since the event source is now shared, the canvas would block events, we prevent that with pointerEvents: none. */}
            {Component?.canvas && (
              <>
                <Scene className='pointer-events-none' eventSource={ref} eventPrefix='client'>
                  {Component.canvas(pageProps)}
                </Scene>
                <Frame />
              </>
            )}
          </Layout>
        </main>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  )
}
