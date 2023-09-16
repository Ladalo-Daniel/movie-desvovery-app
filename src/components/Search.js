import React, { useState } from 'react'

export default function Search({onSearch}) {
  const [query, setQuery] = useState('');
  
  //Function to observe every input event/change
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  //Function to render search result when "search Icon" is clicked
  const handleSearchClick = () => {
    onSearch(query);
  };
 
  //Function to render search result when "Enter key" is stroke
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(query);
    }
  }

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
    </div>
  )
}
