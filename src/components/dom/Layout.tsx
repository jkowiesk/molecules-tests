import { useRef, forwardRef, useImperativeHandle } from 'react'

const Layout = forwardRef(({ children, ...props }: any, ref) => {
  const localRef = useRef()

  useImperativeHandle(ref, () => localRef.current)

  return (
    <div {...props} ref={localRef} className='z-0 flex-1 w-full overflow-x-hidden bg-background'>
      {children}
    </div>
  )
})
Layout.displayName = 'Layout'

export default Layout
