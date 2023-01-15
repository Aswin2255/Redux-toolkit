import React from 'react'
import { useEffect } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Movielisting from '../Movielisting/Movielisting'
import {useDispatch} from 'react-redux'
import { addmovies, fetchasynchmovies, fetchasyncshows } from '../../features/movies/movieslice'

function Home() {
    
    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch(fetchasynchmovies())
       dispatch(fetchasyncshows())
        
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
