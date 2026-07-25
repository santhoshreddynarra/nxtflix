import { Link, useNavigate, useLocation } from 'react-router-dom'
import { logout } from '../../api/auth'
import './index.css'

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const onClickLogout = () => {
    logout()
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
