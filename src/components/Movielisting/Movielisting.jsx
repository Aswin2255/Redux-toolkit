import React from 'react'
import { useSelector } from 'react-redux'
import { getallmovies, getallshows, getloader } from '../../features/movies/movieslice'
import Moviecard from '../Moviecard/Moviecard'
import './movilisting.scss'
function Movielisting() {
    const movies = useSelector(getallmovies)
    const shows = useSelector(getallshows)
    const loader = useSelector(getloader)
    
    console.log('-------------'+movies)
    let rendermovies,rendershows = '';
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
    rendershows = shows.Response === "True" ? (
        shows.Search.map((movie,index)=>{
           return <Moviecard key={index} data = {movie} />
        })
    ):(
        <div className='movies-error'>
            <h1>hii</h1>
            <h3>{shows.Error}</h3>
        </div>
    )
  return (
    <div className='movie-wrapper'>
        <div className='movie-list'>
            <h2>Movies</h2>
            <div className='movie-container'>{ loader ? <h1>loading..</h1> : rendermovies}</div>
        </div>
        <div className='show-list'>
            <h2>Shows</h2>
            <div className='movie-container'>{ loader ? <h1>loading..</h1> : rendershows}</div>
        </div>
      
    </div>
  )
}

export default Movielisting
