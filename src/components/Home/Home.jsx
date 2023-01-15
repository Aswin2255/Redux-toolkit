import React from 'react'
import { useEffect } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Movielisting from '../Movielisting/Movielisting'
import {useDispatch} from 'react-redux'
import { addmovies, fetchasynchmovies, fetchasyncshows } from '../../features/movies/movieslice'

function Home() {
    
    const dispatch = useDispatch()
    const movie = 'harry'
    const show = 'friends'
    useEffect(()=>{
       dispatch(fetchasynchmovies(movie))
       dispatch(fetchasyncshows(show))
        
    },[])
   
  return (
    <div>
        <Header/>
        <div className='banner-img'>
            <Movielisting/>
        </div>
        <Footer/>
       
    </div>
  )
}

export default Home
