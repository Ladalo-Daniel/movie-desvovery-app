import React from 'react'
import "./moviedetailpage.css"
import MovieCard from '../../components/MovieCard'
import SideBar from '../../components/SideBar'
import MovieDetails from '../../components/MovieDetails'

export default function MovieDetailPage() {
  return (
    <section className='moviedetailWrapper'>
      <SideBar />
      <MovieDetails />
    </section>
  )
}
