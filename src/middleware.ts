// PRIMEEDGE FILE 1: MIDDLEWARE
// Place this file at: src/middleware.ts

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Allow access to login page and auth API routes
  if (
    request.nextUrl.pathname === '/login' ||
    request.nextUrl.pathname.startsWith('/api/auth')
  ) {
    return NextResponse.next()
  }

  // Check for authentication cookie
  const authCookie = request.cookies.get('involv-auth')
  
  if (!authCookie?.value) {
    // Redirect to login page
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Verify the session is valid
  try {
    const session = JSON.parse(authCookie.value)
    const now = Date.now()
    
    // Check if session has expired (7 days default)
    if (session.expires && now > session.expires) {
      const response = NextResponse.redirect(new URL('/login', request.url))
      response.cookies.delete('involv-auth')
      return response
    }
  } catch (error) {
    // Invalid cookie format
    const response = NextResponse.redirect(new URL('/login', request.url))
    response.cookies.delete('involv-auth')
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (authentication API routes)
     * - login (login page)  
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - Static assets
     */
    '/((?!api/auth|login|_next/static|_next/image|favicon|logo|icons|apple-touch-icon).*)',
  ],
}