// PRIMEEDGE FILE 3: LOGOUT API
// Place this file at: src/pages/api/auth/logout.ts

import type { NextApiRequest, NextApiResponse } from 'next'
import { serialize } from 'cookie'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  // Clear the authentication cookie
  const cookie = serialize('involv-auth', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0, // Expire immediately
  })

  res.setHeader('Set-Cookie', cookie)
  return res.status(200).json({ message: 'Logout successful' })
}