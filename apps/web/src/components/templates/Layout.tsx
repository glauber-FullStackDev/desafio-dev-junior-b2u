import React from 'react'
import { ReactNode } from 'react'

import { cx } from '@/utils/classNames'

const Layout = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <main
      className={cx(
        'container mx-auto max-w-sm md:max-w-3xl min-h-screen',
        className,
      )}
    >
      {children}
    </main>
  )
}

export default Layout
