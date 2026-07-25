import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import MovieCard from '../../components/MovieCard'
import useWatchLater from '../../hooks/useWatchLater'
import './index.css'

const WatchLater = () => {
  const { watchLater } = useWatchLater()

  return (
    <div className="watch-later-page">
      <Header />

      <main className="watch-later-container">
        <div className="page-header">
          <h1 className="page-title">Watch Later</h1>
          <p className="page-subtitle">
            {watchLater.length}{' '}
            {watchLater.length === 1 ? 'movie' : 'movies'} saved to your watchlist
          </p>
        </div>

        {watchLater.length > 0 ? (
          <div className="watch-later-grid">
            {watchLater.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty-watch-later">
            <div className="empty-icon">🎬</div>
            <h2>Your Watch Later list is empty</h2>
            <p>
              Explore movies on the home page and click &quot;+ Add Watch Later&quot; to save them here for later viewing.
            </p>
            <Link to="/" className="browse-btn">
              Explore Movies
            </Link>
          </div>
        )}
      </main>
    </div>
  )
}

export default WatchLater
