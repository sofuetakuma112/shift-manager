import { FileInput } from '@/components/FileInput'
import { MobileLayout } from '@/components/Layouts/MobileLayout'
import { TextInput } from '@/components/TextInput'
import { Stack } from '@mui/system'
import { NextPageWithLayout } from 'next'
import React from 'react'
import { useForm } from 'react-hook-form'

type FormInput = {
  groupName: string
  groupImage: File
}

const Index: NextPageWithLayout = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormInput>()
  const onSubmit = (data: FormInput) => console.log(data)

  return (
    <div>
      <h1 className='text-2xl font-extrabold dark:text-white pb-4'>グループ新規作成</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          spacing={4}
          sx={{
            height: '100%',
          }}
        >
          <Stack spacing={2}>
            <TextInput label='グループ名' id='user_name' {...register('groupName')} />
            <FileInput id='group_image' label='グループ画像' {...register('groupImage')} />
          </Stack>
          <button className='btn btn-primary'>作成</button>
        </Stack>
      </form>
    </div>
  )
}

Index.getLayout = (page) => <MobileLayout>{page}</MobileLayout>

export default Index
