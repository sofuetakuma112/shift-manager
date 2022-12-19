import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getSession } from 'next-auth/react'

export default withAuth(
  async function middleware(request) {
    console.log('request: %o', request)
    console.log('Object.keys(request): %o', Object.keys(request))

    // if (request.nextUrl.pathname.startsWith('/groups')) {
    //   // nameが設定済みか確認する
    //   const session = await getSession({ req: request })
    //   return NextResponse.redirect(new URL('/', request.url))
    // }
  },
  // {
  //   callbacks: {
  //     authorized: ({ token }) => {
  //       if (token) {
  //         return true
  //       }
  //     },
  //   },
  // },
)

export const config = { matcher: ['/hoge'] }
