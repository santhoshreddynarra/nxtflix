import './index.css'

const GenreFilter = ({ genres, activeGenre, onSelectGenre }) => {
  return (
    <div className="genre-filter-container">
      <h3 className="filter-heading">Explore by Genre</h3>
      <div className="genre-pills">
        {genres.map((genre) => (
          <button
            key={genre}
            type="button"
            className={`genre-pill ${activeGenre === genre ? 'active' : ''}`}
            onClick={() => onSelectGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  )
}

export default GenreFilter
