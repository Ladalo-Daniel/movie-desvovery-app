import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie, searchResults }) {

  

  const searchResult = searchResults.map((r) => {
    return(
      <>
      <Link className='link' to={`/movies/${r.id}`}>
      <div key={r.id}>
      <img className='movieListImg ' src={`https://image.tmdb.org/t/p/w300${r.poster_path}`} alt={movie.title} data-testid="movie-poster" />
      <div className='title-container'>
      <h1 data-testid="movie-title">{r.title}</h1>
      <p data-testid="movie-release-date">{r.release_date}</p>
      </div>
      </div>
      </Link>
      </>
    )
  })

  return (
    <>
    <Link className='link' to={`/movies/${movie.id}`} >
    <div className="movie-card" data-testid="movie-card">
      <div className="movie-card" data-testid="movie-card">{searchResult}</div>
      <img className='movieListImg ' src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} data-testid="movie-poster" />
      <div className='title-container'>
      <h1 data-testid="movie-title">{movie.title}</h1>
      <p data-testid="movie-release-date">{movie.release_date}</p>
      </div>
    </div>
    </Link>
    </>
);

}

export default MovieCard;
