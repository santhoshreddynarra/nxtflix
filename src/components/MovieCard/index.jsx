import { Link } from 'react-router-dom'
import './index.css'

const MovieCard = ({ movie }) => {
  const { id, title, poster_url, rating, genre, release_year, year } = movie
  const displayYear = release_year || year

  return (
    <Link to={`/movies/${id}`} className="movie-card-link">
      <div className="movie-card">
        <div className="movie-poster-wrapper">
          <img src={poster_url} alt={title} className="movie-poster" />
          <div className="card-overlay">
            <span className="play-icon">▶</span>
          </div>
          <div className="card-rating">
            <span className="star">★</span> {rating}
          </div>
        </div>
        <div className="movie-info">
          <h3 className="movie-title">{title}</h3>
          <div className="movie-meta">
            <span className="movie-genre">{genre}</span>
            <span className="movie-year">{displayYear}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard
