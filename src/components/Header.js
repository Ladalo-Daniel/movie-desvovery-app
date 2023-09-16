import React from 'react'
import Search from './Search'
import logo from "../../src/img/mlogo.jpeg"
import bar from "../../src/img/mbar.jpeg"

export default function Header({onSearch}) {
  return (
    <header className='headerContainer'>
      <div>
        <div className='header'>
          <div className='logocontainer'>
        <img src={logo}></img>
        <h1>MovieBox</h1>
          </div>
       <Search onSearch={onSearch} />
       <div className='navbar-signup-container'>
         <p>Signin</p>
         <img src={bar}></img>
       </div>
        </div>
      </div>
     <div className='header-title'>
      <h1>John Wick 3: <br /> Parabellum </h1>
      <p>A true story of two men who should never have met – a quadriplegic aristocrat who was injured in a paragliding accident and a young man from the projects.</p>
     </div>
      <button className='watchLater'>Watch Movie Trailer</button>
    </header>
  )
}
