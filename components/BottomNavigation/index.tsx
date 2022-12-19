import React from 'react'
import { UserIcon } from '@/components/Icons/UserIcon'
import { UserGroupIcon } from '@/components/Icons/UserGroupIcon'
import { CalendarIcon } from '@/components/Icons/CalendarIcon'
import Link from 'next/link'

export const BottomNavigation: React.FC = () => {
  return (
    <div className='btm-nav'>
      <Link href='/profile/edit'>
        <UserIcon />
      </Link>
      <Link href='/groups'>
        <UserGroupIcon />
      </Link>
      <Link href='/'>
        <CalendarIcon />
      </Link>
    </div>
  )
}
