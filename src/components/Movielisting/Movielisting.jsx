import React from 'react'
import { useSelector } from 'react-redux'
import { getallmovies } from '../../features/movies/movieslice'
import Moviecard from '../Moviecard/Moviecard'
import './movilisting.scss'
function Movielisting() {
    const movies = useSelector(getallmovies)
    console.log('-------------'+movies)
    let rendermovies = '';
    rendermovies = movies.Response === "True" ? (
        movies.Search.map((movie,index)=>{
           return <Moviecard key={index} data = {movie} />
        })
    ):(
        <div className='movies-error'>
            <h1>hii</h1>
            <h3>{movies.Error}</h3>
        </div>
    )
  return (
    <div className='movie-wrapper'>
        <div className='movie-list'>
            <h2>Movies</h2>
            <div className='movie-container'>{rendermovies}</div>
        </div>
      
    </div>
  )
}

export default Movielisting
