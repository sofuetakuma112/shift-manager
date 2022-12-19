import React from 'react'
import { TextInput } from '@/components/TextInput'
import { useForm } from 'react-hook-form'
import { Stack } from '@mui/material'
import { MobileLayout } from '@/components/Layouts/MobileLayout'
import { NextPageWithLayout } from 'next'
import { FileInput } from '@/components/FileInput'

type FormInput = {
  userName: string
  profileImage: FileList
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
      <h1 className='text-2xl font-extrabold dark:text-white pb-4'>プロフィール情報編集</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          spacing={4}
          sx={{
            height: '100%',
          }}
        >
          <Stack spacing={2}>
            <TextInput label='ユーザー名' id='user_name' {...register('userName')} />
            <FileInput id='profile_image' label='プロフィール画像' {...register('profileImage')} />
          </Stack>
          <button className='btn btn-primary'>更新</button>
        </Stack>
      </form>
    </div>
  )
}

Index.getLayout = (page) => <MobileLayout>{page}</MobileLayout>

export default Index
