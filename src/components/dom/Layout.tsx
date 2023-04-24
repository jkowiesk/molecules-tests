import { useRef, forwardRef, useImperativeHandle } from 'react'

const Layout = forwardRef(({ children, ...props }: any, ref) => {
  const localRef = useRef()

  useImperativeHandle(ref, () => localRef.current)

  return (
    <div
      {...props}
      ref={localRef}
      className='z-0 w-full overflow-x-hidden border-t-8 rounded-3xl flex-[2_1_0%] border-purple-secondary bg-background'>
      {children}
    </div>
  )
})
Layout.displayName = 'Layout'

export default Layout
