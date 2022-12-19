import NextAuth, { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import EmailProvider from 'next-auth/providers/email'

const prisma = new PrismaClient()

// export const authOptions: NextAuthOptions = {
//   debug: true,
//   session: {
//     strategy: "database",
//     maxAge: 60 * 60 * 24, // 24 hours
//   },
//   adapter: PrismaAdapter(prisma),
//   // Configure one or more authentication providers
//   providers: [
//     EmailProvider({
//       server: {
//         host: process.env.SMTP_HOST,
//         port: process.env.SMTP_PORT,
//         secure: false,
//       },
//       from: process.env.SMTP_FROM,
//     }),
//   ],
//   pages: {
//     signIn: "/auth/login",
//   },
// };

export const authOptions: NextAuthOptions = {
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],

  database: process.env.DATABASE_URL,
  secret: process.env.SECRET,

  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  jwt: {
    secret: '7f64eed103da3cca388bc297ac9a0cce',
    encryption: true,
  },

  debug: true,
  adapter: PrismaAdapter(prisma),
}

export default NextAuth(authOptions)
