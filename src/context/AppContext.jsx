import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { fetchTopMovies } from '../api';

export const AppContext = createContext()

export default function AppContextProvider({ children }) {
    const [movieDetails, setMovieDetails] = useState(null);
    const [error, setError] = useState(null);

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const [query, setQuery] = useState('');
    const [open, setOpen] = useState(false)
  

  //Api key
   const TMDB_API_KEY = 'b82c3704c3dbf1f892598efb74d6b3cf';

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


  useEffect(() => {
    if (searchQuery.trim() !== '') {
        handleSearch(searchQuery);
    }
  }, [searchQuery]);



  //Function to observe every input event/change
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  //Function to render search result when "search Icon" is clicked
  const handleSearchClick = () => {
    setSearchQuery(query);
    setOpen(true)
  };
 
  //Function to render search result when "Enter key" is stroke
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setSearchQuery(query);
      setOpen(true)
    }
  }





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
        const firstTenResults = data.results.slice(0, 3); // Limit to the first 10 results
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

    



  return (
    <AppContext.Provider value={{movieDetails, setMovieDetails, isLoading, query, setQuery, open, setOpen, handleInputChange, handleKeyPress, handleSearchClick, handleSearch, searchResults, searchQuery, setSearchQuery, movies}}>
       {children}
    </AppContext.Provider>
  )
}
