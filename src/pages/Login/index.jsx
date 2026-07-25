import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { signIn } from '../../api/auth'
import './index.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  // Redirect if already authenticated
  const token = Cookies.get('jwt_token')
  if (token) {
    return <Navigate to="/" replace />
  }

  const submitForm = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    setErrorMsg('')

    try {
      const { token } = await signIn(email, password)
      Cookies.set('jwt_token', token, { expires: 7 })
      setIsLoading(false)
      navigate('/', { replace: true })
    } catch (error) {
      setErrorMsg(error.message || 'Something went wrong. Please try again.')
      setIsLoading(false)
    }
  }

  return (
    <div className="login-container">
      {/* Left Side: Brand Section */}
      <div className="brand-container">
        <h1>NXTFLIX</h1>
        <p>
          Unlimited movies, shows and more.
          <br />
          Watch anywhere. Cancel anytime.
        </p>
      </div>

      {/* Right Side: Form Section */}
      <div className="form-container">
        <form onSubmit={submitForm}>
          <h1>Sign In</h1>

          <label htmlFor="email">EMAIL</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">PASSWORD</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>

          {errorMsg && <p className="error-banner">{errorMsg}</p>}
        </form>
      </div>
    </div>
  )
}

export default Login