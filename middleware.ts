import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const SITE_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3001'

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  try {
    const res = await fetch(
      `${SITE_URL}/api/redirects?where[from][equals]=${encodeURIComponent(path)}&limit=1&depth=0`,
      {
        headers: { 'Content-Type': 'application/json' },
        // cache for 5 minutes so we're not hitting the DB on every request
        next: { revalidate: 300 },
      },
    )

    if (res.ok) {
      const data = await res.json()
      const redirect = data?.docs?.[0]
      if (redirect) {
        const to =
          typeof redirect.to?.url === 'string'
            ? redirect.to.url
            : typeof redirect.to === 'string'
              ? redirect.to
              : null

        if (to) {
          const status = redirect.type === '302' ? 302 : 301
          const destination = to.startsWith('http') ? to : new URL(to, request.url).toString()
          return NextResponse.redirect(destination, status)
        }
      }
    }
  } catch {
    // never break the site if the redirects API is unavailable
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // run on all paths except Next.js internals, Payload admin/api, and static assets
    '/((?!_next/static|_next/image|favicon\\.ico|admin|api|.*\\..*).*)',
  ],
}
