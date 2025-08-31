// PRIMEEDGE FILE 2: LOGIN API
// Place this file at: src/pages/api/auth/login.ts

import type { NextApiRequest, NextApiResponse } from 'next'
import { serialize } from 'cookie'

const OBFUSCATED_USERS = 'eyJ0aW1iYXJuZXR0QGRpcmVjdHBvaW50YWR2aXNvcnkuY29tLmF1IjoiSW52b2x2Rm91bmRlcjIwMjUhIiwibG91aXNlQGxhbmVjb25zdWx0aW5nYW5kYWR2aXNvcnkuY29tIjoiQ29tcGxpYW5jZTIwMjUhIiwibWFyay5rZWxseUBpbnZvbHYuY29tLmF1IjoiWW91clNlY3VyZVBhc3MyMDI1ISIsImdhcmV0aC50aG9tYXNAdHJlZm9yLmNvbS5hdSI6IlRyZWZvckFjY2VzczEtMjAyNSEiLCJwaGlsLmRyZWF2ZXJAdHJlZm9yLmNvbS5hdSI6IlRyZWZvckFjY2VzczItMjAyNSEiLCJwb3RlbnRpYWxAaW52ZXN0b3IuY29tIjoiSW52ZXN0b3JQaXRjaERlY2syMDI1ISJ9'

// Function to decode authorized users
const getAuthorizedUsers = (): Record<string, string> => {
  try {
    const decoded = Buffer.from(OBFUSCATED_USERS, 'base64').toString('utf-8')
    return JSON.parse(decoded)
  } catch (error) {
    console.error('Failed to decode user credentials')
    return {}
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required' })
  }

  // Get authorized users
  const authorizedUsers = getAuthorizedUsers()

  // Check credentials
  if (authorizedUsers[email] && authorizedUsers[email] === password) {
    // Create session data
    const sessionData = {
      email,
      loginTime: Date.now(),
      expires: Date.now() + (7 * 24 * 60 * 60 * 1000), // 7 days
    }

    // Create secure cookie
    const cookie = serialize('involv-auth', JSON.stringify(sessionData), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
    })

    res.setHeader('Set-Cookie', cookie)
    return res.status(200).json({ message: 'Login successful' })
  } else {
    return res.status(401).json({ message: 'Invalid credentials' })
  }
}