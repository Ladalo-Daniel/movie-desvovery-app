import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

export default function SearchResult() {
  const {searchResults, setOpen, open} = useContext(AppContext)
  // const modalRef = useRef(null);
  //   //const final = searchResults.filter((result) => result.titles.some((title)=> title.includes(query)))
  //   useEffect(() => {
  //     // Function to handle clicks outside of the modal container
  //     function handleClickOutside(event) {
  //       if (modalRef.current && !modalRef.current.contains(event.target)) {
  //         setOpen(false);
  //       }
  //     }
  
  //     // Add the event listener when the modal is open
  //     if (open) {
  //       document.addEventListener('mousedown', handleClickOutside);
  //     }
  
  //     // Clean up the event listener when the modal is closed
  //     return () => {
  //       document.removeEventListener('mousedown', handleClickOutside);
  //     };
  //   }, [open, setOpen(false)]);
  
  //   if (open) {
  //     return null;
  //   }

    const searchResult = searchResults.map((r) => {
        return(
          <>
          <Link className='link' to={`/movies/${r.id}`} onClick={() => setOpen(false)}>
          <div key={r.id}>
          <img className='movieListImg ' src={`https://image.tmdb.org/t/p/w300${r.poster_path}`} alt={r.title} data-testid="movie-poster" />
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
    <div className= "movie-card-search" data-testid="movie-card" >{searchResult}</div>
  )
}
