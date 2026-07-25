import { useParams, Navigate } from 'react-router-dom'
import Header from '../../components/Header'
import moviesData from '../../data/movies'
import useWatchLater from '../../hooks/useWatchLater'
import './index.css'

const MovieDetails = () => {
  const { id } = useParams()
  const { isInWatchLater, toggleWatchLater } = useWatchLater()

  const movie = moviesData.find((item) => String(item.id) === String(id))

  // Invalid movie ID -> redirect to NotFound
  if (!movie) {
    return <Navigate to="/not-found" replace />
  }

  const {
    title,
    genre,
    rating,
    release_year,
    year,
    duration,
    overview,
    poster_url,
    backdrop_url,
  } = movie

  const displayYear = release_year || year
  const isSaved = isInWatchLater(id)

  return (
    <div className="movie-details-page">
      <Header />

      {/* Backdrop Section */}
      <div
        className="details-hero"
        style={{ backgroundImage: `url(${backdrop_url || poster_url})` }}
      >
        <div className="details-hero-overlay" />

        <div className="details-hero-container">
          {/* Poster */}
          <div className="details-poster-card">
            <img src={poster_url} alt={title} className="details-poster-img" />
          </div>

          {/* Details Info */}
          <div className="details-info">
            <div className="details-badges">
              <span className="genre-badge">{genre}</span>
              <span className="year-badge">{displayYear}</span>
              <span className="duration-badge">{duration}</span>
              <span className="rating-badge">★ {rating}</span>
            </div>

            <h1 className="details-title">{title}</h1>

            <div className="details-overview-box">
              <h3 className="overview-heading">Overview</h3>
              <p className="overview-text">{overview}</p>
            </div>

            <div className="details-actions">
              <button
                type="button"
                className={`watch-later-btn ${isSaved ? 'remove' : 'add'}`}
                onClick={() => toggleWatchLater(movie)}
              >
                {isSaved ? '✓ Remove Watch Later' : '+ Add Watch Later'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
