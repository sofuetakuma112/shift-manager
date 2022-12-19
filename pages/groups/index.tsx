import { GetServerSideProps, NextPageWithLayout } from 'next'
import React from 'react'

import { GroupList } from '@/components/flowbite/GroupList'
import { Group } from '@/types/Group'
import { MobileLayout } from '@/components/Layouts/MobileLayout'
import Link from 'next/link'

const groups = [
  {
    id: 1,
    name: '松山酒場',
    imageUrl:
      'https://images.unsplash.com/photo-1670837301612-492633adb05c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 2,
    name: '海鮮料理専門店 鯛将',
    imageUrl:
      'https://images.unsplash.com/photo-1671055745403-1bb62dd7bcf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
  },
  {
    id: 3,
    name: '明神丸 松山二番町店',
    imageUrl:
      'https://images.unsplash.com/photo-1671026423293-7adf6a6abd13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: 4,
    name: '天神',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1664285637075-7bd8abe6d26f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
  },
  {
    id: 5,
    name: '居魚屋　網元',
    imageUrl:
      'https://images.unsplash.com/photo-1670837302975-8db32a473643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
]

type Props = {
  groups: Group[]
}

// グループのリストを表示する
const Index: NextPageWithLayout<Props> = ({ groups }) => {
  return (
    <div>
      <div className='flex justify-end'>
        <Link className='btn' href="/groups/new">グループを作成</Link>
      </div>
      <GroupList groups={groups} />
    </div>
  )
}

Index.getLayout = (page) => <MobileLayout>{page}</MobileLayout>

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: { groups },
  }
}

export default Index
