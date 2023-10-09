import React, { useContext } from 'react'
import MovieCard from './MovieCard'
import { AppContext } from '../context/AppContext'

export default function MovieList() {
  const {movies} = useContext(AppContext)
  return (
    <div className='movieListContainer'>
      <div className='featured'>
        <h1>Featured Movie</h1>
        <p>See more </p>
      </div>
    <section  className='movieList'>
       {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
       ))}
    </section>
    </div>
  )
}
