import React, { useEffect, useState } from 'react'
import { fetchTopMovies } from '../../api';
import Header from '../../components/Header';
import MovieList from '../../components/MovieList';
import { searchMovies } from '../../api';
import Footer from '../../footer/Footer';
import Loader from "../../components/loader/Loader"

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    //getting the top ten movie from api
    useEffect(() => {
      fetchTopMovies()
        .then((data) => {
            console.log(data)
          setMovies(data.slice(0, 10));
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
        });
    }, []);

   const TMDB_API_KEY = 'b82c3704c3dbf1f892598efb74d6b3cf';


    const handleSearch = async (query) => {
        setIsLoading(true);
  
      // Make an API request to search for movies by title
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${query}`
        );
  
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
  
        const data = await response.json();
        const firstTenResults = data.results.slice(0, 1); // Limit to the first 10 results
        setTimeout(() => {
          setSearchResults(firstTenResults);
        },2000)
        setIsLoading(true);
      } catch (error) {
        console.error(error.message);
        setSearchResults([]);
        setIsLoading(false)
      }
        setIsLoading(false);

    };

    useEffect(() => {
      if (searchQuery.trim() !== '') {
          handleSearch(searchQuery);
      }
    }, [searchQuery]);


  return (
    <main className='home'>
      <Header onSearch={setSearchQuery} />
     {isLoading ?
      <Loader /> :
      <MovieList movies={movies} searchResults={searchResults} onSearch={setSearchQuery} isLoading={isLoading} setIsLoading={setIsLoading} />}
      <Footer />
    </main>
  )
}
