import { useRef, forwardRef, useImperativeHandle } from 'react'

const Layout = forwardRef(({ children, ...props }: any, ref) => {
  const localRef = useRef()

  useImperativeHandle(ref, () => localRef.current)

  return (
    <div
      {...props}
      ref={localRef}
      className='z-0 w-full h-full overflow-x-hidden border-t-8 border-l-8 border-tl-8 col-span-2 rounded-tl-3xl flex-[2_1_0%] border-purple-secondary bg-background'>
      {children}
    </div>
  )
})
Layout.displayName = 'Layout'

export default Layout
