import Filters from '@/component/Filters';
import React from 'react'

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='  '>
        {/* <Filters /> */}
        {children}
    </div>
  )
}

export default layout