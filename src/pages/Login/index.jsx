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
      <div className="login-content">
        {/* Left Side: Brand Section */}
        <div className="brand-container">
          <div className="brand-logo">NXTFLIX</div>
          <h1 className="brand-title">
            Unlimited movies, shows and more.
          </h1>
          <p className="brand-tagline">
            Watch anywhere. Cancel anytime.
          </p>
          <div className="brand-badges">
            <span className="badge">HD & 4K Ultra</span>
            <span className="badge">No Ads</span>
            <span className="badge">Cancel Anytime</span>
          </div>
        </div>

        {/* Right Side: Form Section */}
        <div className="form-container">
          <form className="login-form" onSubmit={submitForm}>
            <h2 className="form-title">Sign In</h2>

            <div className="input-group">
              <label htmlFor="email">EMAIL</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">PASSWORD</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? (
                <span className="btn-loader">
                  <span className="spinner"></span> Signing In...
                </span>
              ) : (
                'Sign In'
              )}
            </button>

            {errorMsg && <p className="error-banner">{errorMsg}</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login