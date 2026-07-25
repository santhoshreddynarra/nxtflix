import { Link, useNavigate, useLocation } from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    navigate('/login', { replace: true })
  }

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          NXTFLIX
        </Link>

        <nav className="navbar-nav">
          <Link
            to="/"
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/watch-later"
            className={`nav-link ${
              location.pathname === '/watch-later' ? 'active' : ''
            }`}
          >
            Watch Later
          </Link>
        </nav>

        <button type="button" className="logout-btn" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    </header>
  )
}

export default Header
