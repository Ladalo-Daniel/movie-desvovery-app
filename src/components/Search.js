import React, { useContext, useState } from 'react'
import SearchResult from "../components/SearchResult"
import { AppContext } from '../context/AppContext'

export default function Search() {
  const { query, handleInputChange, handleKeyPress, handleSearchClick, open} = useContext(AppContext)
  
  return (
    <div className='searchInput'>
      <input 
      type='text'
      value={query}
      onChange={handleInputChange}
      placeholder='What do you want to watch?'
      onKeyDown={handleKeyPress}
      ></input>
      <span onClick={handleSearchClick}><i  className='fas fa-search'></i></span>
     {open && <SearchResult />}
    </div>
  )
}
