import { useState, useMemo } from 'react'
import Header from '../../components/Header'
import GenreFilter from '../../components/GenreFilter'
import MovieCarousel from '../../components/MovieCarousel'
import MovieCard from '../../components/MovieCard'
import moviesData, { GENRES } from '../../data/movies'
import './index.css'

const Home = () => {
  const [selectedGenre, setSelectedGenre] = useState('All')

  const filteredMovies = useMemo(() => {
    if (selectedGenre === 'All') {
      return moviesData
    }
    return moviesData.filter((movie) => movie.genre === selectedGenre)
  }, [selectedGenre])

  const trendingMovies = useMemo(() => {
    return [...filteredMovies]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 16)
  }, [filteredMovies])

  const freshReleases = useMemo(() => {
    return filteredMovies
      .filter((movie) => (movie.release_year || movie.year) >= 2015)
      .slice(0, 16)
  }, [filteredMovies])

  return (
    <div className="home-page">
      <Header />

      <section className="hero-banner">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-badge">Featured Streaming</span>
          <h1 className="hero-title">Discover your next favourite</h1>
          <p className="hero-subtitle">
            Explore thousands of blockbuster hits, indie gems, and timeless classics.
          </p>
        </div>
      </section>

      <main className="home-main-container">
        <GenreFilter
          genres={GENRES}
          activeGenre={selectedGenre}
          onSelectGenre={setSelectedGenre}
        />

        {selectedGenre === 'All' ? (
          <>
            {trendingMovies.length > 0 && (
              <MovieCarousel title="Trending Now" movies={trendingMovies} />
            )}
            {freshReleases.length > 0 && (
              <MovieCarousel title="Fresh Releases" movies={freshReleases} />
            )}
          </>
        ) : (
          <section className="filtered-movies-section">
            <h2 className="section-title">{selectedGenre} Movies</h2>
            {filteredMovies.length > 0 ? (
              <div className="movies-grid">
                {filteredMovies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            ) : (
              <div className="no-movies-box">
                <p>No movies found for {selectedGenre}.</p>
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  )
}

export default Home
