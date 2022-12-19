import type { GetServerSideProps, NextPage } from 'next'
import { getCsrfToken } from 'next-auth/react'
import { Stack } from '@mui/material'
import { TextInput } from '@/components/TextInput'

type Props = {
  csrfToken: string
}

const SignInPage: NextPage<Props> = ({ csrfToken }) => {
  return (
    <div>
      <h1 className='text-2xl font-extrabold dark:text-white pb-4'>ログイン/新規登録</h1>
      <form method='post' action='/api/auth/signin/email'>
        <Stack
          spacing={4}
          sx={{
            height: '100%',
          }}
        >
          <Stack spacing={2}>
            <input name='csrfToken' type='hidden' defaultValue={csrfToken} />
            <TextInput name='email' label='メールアドレス' id='email' />
          </Stack>
          <button className='btn btn-primary'>ログイン/新規登録</button>
        </Stack>
      </form>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const csrfToken = await getCsrfToken(context)
  return {
    props: { csrfToken },
  }
}

export default SignInPage
