import React from 'react'
import MovieCard from './MovieCard'

export default function MovieList({movies, searchResults, onSearch, isLoading, setIsLoading}) {
  return (
    <div className='movieListContainer'>
      <div className='featured'>
        <h1>Featured Movie</h1>
        <p>See more </p>
      </div>
    <section  className='movieList'>
       {movies.map((movie) => (
        <MovieCard movie={movie} searchResults={searchResults} onSearch={onSearch} isLoading={isLoading} setIsLoading={setIsLoading} key={movie.id} />
       ))}
    </section>
    </div>
  )
}
