import React from 'react'
import { UserIcon } from '@/components/Icons/UserIcon'
import { UserGroupIcon } from '@/components/Icons/UserGroupIcon'
import { CalendarIcon } from '@/components/Icons/CalendarIcon'
import Link from 'next/link'

export const AppBar = () => {
  return (
    <nav className='bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 bottom-0 left-0 border-t border-gray-200 dark:border-gray-600'>
      <div className='container tems-center mx-auto'>
        <div className='flex md:order-2 justify-between'>
          <Link
            href='/profile/edit'
            className='text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center'
          >
            <UserIcon />
          </Link>
          <Link
            href='/groups'
            className='text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center'
          >
            <UserGroupIcon />
          </Link>
          <Link
            className='text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center'
            href='/'
          >
            <CalendarIcon />
          </Link>
        </div>
      </div>
    </nav>
  )
}
