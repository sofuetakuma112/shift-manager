import { BottomNavigation } from '@/components/BottomNavigation'
import React from 'react'

type Props = {
  children: React.ReactNode
}

export const MobileLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className='px-1 pt-2'>
      {children}
      <BottomNavigation />
    </div>
  )
}
