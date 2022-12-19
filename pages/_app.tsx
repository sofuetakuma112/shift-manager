import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import type { AppPropsWithLayout } from 'next/app'
import { Session } from 'next-auth'

const theme = createTheme()

function MyApp({ Component, pageProps }: AppPropsWithLayout<{ session: Session }>) {
  const getLayout = Component.getLayout ?? ((page: any) => page)

  return (
    <ThemeProvider theme={theme}>
      <SessionProvider session={pageProps.session}>
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </ThemeProvider>
  )
}

export default MyApp
