import Cookies from 'js-cookie'

const AUTH_API_URL = 'https://serverless-api-teal.vercel.app/api/auth/signin'

/**
 * Sign in user with email and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<{token: string}>}
 */
export const signIn = async (email, password) => {
  const response = await fetch(AUTH_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })

  const data = await response.json()

  if (!response.ok) {
    const errorMsg = data?.message || data?.error || 'Authentication failed. Please check your credentials.'
    throw new Error(errorMsg)
  }

  const token = data?.data?.token || data?.token

  if (!token) {
    throw new Error('Token not received from server.')
  }

  return { token, data }
}

/**
 * Logout user by removing jwt_token cookie
 */
export const logout = () => {
  Cookies.remove('jwt_token')
}
