import { useRef } from 'react'
import MovieCard from '../MovieCard'
import './index.css'

const MovieCarousel = ({ title, movies }) => {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollAmount = clientWidth * 0.75
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="movie-section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <div className="carousel-nav-btns">
          <button
            type="button"
            className="carousel-nav-btn"
            onClick={() => scroll('left')}
            aria-label="Scroll Left"
          >
            ‹
          </button>
          <button
            type="button"
            className="carousel-nav-btn"
            onClick={() => scroll('right')}
            aria-label="Scroll Right"
          >
            ›
          </button>
        </div>
      </div>

      <div className="carousel-container" ref={scrollRef}>
        {movies.map((movie) => (
          <div key={movie.id} className="carousel-item">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieCarousel
