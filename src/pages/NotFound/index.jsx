import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import './index.css'

const NotFound = () => {
  return (
    <div className="not-found-page">
      <Header />
      <main className="not-found-container">
        <div className="not-found-card">
          <div className="not-found-code">404</div>
          <h1 className="not-found-title">Page Not Found</h1>
          <p className="not-found-desc">
            We are sorry, the page you requested could not be found. Please check the URL or return home.
          </p>
          <Link to="/" className="home-btn">
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  )
}

export default NotFound
