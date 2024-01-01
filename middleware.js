import { withAuth } from 'next-auth/middleware'

export const config = { matcher: ["/auth2"]}

export default withAuth(
  (req) => {
      console.log('in middleware: ', req.nextauth)
    if (req.nextUrl.pathname === '/auth2') {
    }
  },
  {
    callbacks: {
      authorized({token}) {
        console.log('authorized: ', token)
        return token?.user?.role === 'admin'
      }
    }
  }
)