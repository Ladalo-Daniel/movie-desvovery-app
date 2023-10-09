
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const MovieDetailsPage = () => {
  const {movieDetails, setMovieDetails} = useContext(AppContext)
  //const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  //Using useLocatin hook to get the id in the url
  const location = useLocation();
  const movieId = location.pathname.split("/")[2];
  console.log(location)

  //Api key
  const TMDB_API_KEY = 'b82c3704c3dbf1f892598efb74d6b3cf';

  useEffect(() => {
    //async function to fetch movie details from api end point by each of the movie ID
    async function fetchMovieDetails() {
      try {
        console.log(movieId)
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}&language=en-US`);
        if (!response.ok) {
          throw new Error('Movie not found');
        }
        const data = await response.json();
        setMovieDetails(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    }
    //calling the function
    fetchMovieDetails();
  }, [movieId]);
  
  console.log(movieDetails)

  // Render loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Render error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
        <div className='movieDetails'>
          <img src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`} alt={movieDetails.title} data-testid="movie-poster"></img>
          <div className='moviedetailItem'>
            <h1 data-testid="movie-title">{movieDetails.title}</h1>
            <p  data-testid="movie-release-date">{movieDetails.release_date}</p>
            <p data-testid="movie-runtime">{movieDetails.runtime} minutes</p>
            <button className='btn-movie-details'>Action</button>
            <button  className='btn-movie-details'>Drama</button>
            <button><i className='fas fa-heart'></i></button>
          </div>
          <div className='overview-container'>
            <p data-testid="movie-overview">{movieDetails.overview}</p>
            <div className='btn-watch'>
              <button className='watch'>See Watch Time</button>
              <button className='watch'>More watch options</button>
            </div>
          </div>
        </div>
      )
    

};

export default MovieDetailsPage;
