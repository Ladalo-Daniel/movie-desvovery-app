import React from 'react'
import logo from "../../src/img/mlogo.jpeg"

export default function SideBar() {
  return (
    <div className='sideBar'>
      <div className='sidebar-logo'>
        <img src={logo}></img>
        <h1>MovieBox</h1>
      </div>
      <ul className='sidebar-ul'>
        <li><i className='fas fa-home'></i>Home</li>
        <li><i className='fas fa-camera'></i>Movie series</li>
        <li><i className='fas fa-tv'></i>Upcoming</li>
        <li><i className='fas fa-heart'></i>Favorite</li>
      </ul>
      <div className='sidebar-content'>
        <p>Play Movie Quizes an Earn free Ticket </p>
      </div>
    </div>
  )
}
