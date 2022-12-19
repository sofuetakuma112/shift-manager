import React from 'react'
import { useRouter } from 'next/router'
import { Row, Table } from '@/components/Table'
import { GetServerSideProps, NextPageWithLayout } from 'next'
import { MobileLayout } from '@/components/Layouts/MobileLayout'

type Props = {
  data: {
    columnNames: string[]
    rows: Row[]
  }
}

// グループの詳細画面（シフト表？）
const Index: NextPageWithLayout<Props> = ({ data }) => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <Table columnNames={data.columnNames} rows={data.rows} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const batsu = '✕'
  const maru = '◎'

  return {
    props: {
      data: {
        columnNames: ['', '16', '17', '18', '19', '20', '21', '22'],
        rows: [
          ['08:00', batsu, maru, maru, batsu, batsu, batsu, maru],
          ['08:30', batsu, maru, maru, batsu, batsu, batsu, maru],
          ['09:00', batsu, maru, maru, batsu, batsu, batsu, maru],
          ['09:30', batsu, maru, maru, batsu, batsu, batsu, maru],
          ['10:00', batsu, maru, maru, batsu, batsu, batsu, maru],
          ['10:30', batsu, maru, maru, batsu, batsu, batsu, maru],
          ['11:00', batsu, maru, maru, batsu, batsu, batsu, maru],
          ['11:30', batsu, maru, maru, batsu, batsu, batsu, maru],
          ['12:00', batsu, maru, maru, batsu, batsu, batsu, maru],
          ['13:00', batsu, maru, maru, batsu, batsu, batsu, maru],
          ['13:30', batsu, maru, maru, batsu, batsu, batsu, maru],
          ['14:00', batsu, maru, maru, batsu, batsu, batsu, maru],
          ['14:30', batsu, maru, maru, batsu, batsu, batsu, maru],
          ['15:00', batsu, maru, maru, batsu, batsu, batsu, maru],
          ['15:30', batsu, maru, maru, batsu, batsu, batsu, maru],
          ['16:00', batsu, maru, maru, batsu, batsu, batsu, maru],
          ['16:30', batsu, maru, maru, batsu, batsu, batsu, maru],
          ['17:00', batsu, maru, maru, batsu, batsu, batsu, maru],
          ['17:30', batsu, maru, maru, batsu, batsu, batsu, maru],
          ['18:00', batsu, maru, maru, batsu, batsu, batsu, maru],
          ['18:30', batsu, maru, maru, batsu, batsu, batsu, maru],
          ['19:00', batsu, maru, maru, batsu, batsu, batsu, maru],
          ['19:30', batsu, maru, maru, batsu, batsu, batsu, maru],
          ['20:00', batsu, maru, maru, batsu, batsu, batsu, maru],
          ['20:30', batsu, maru, maru, batsu, batsu, batsu, maru],
          ['21:00', batsu, maru, maru, batsu, batsu, batsu, maru],
          ['21:30', batsu, maru, maru, batsu, batsu, batsu, maru],
          ['22:00', batsu, maru, maru, batsu, batsu, batsu, maru],
        ],
      },
    },
  }
}

// Index.getLayout = (page) => <MobileLayout>{page}</MobileLayout>

export default Index
