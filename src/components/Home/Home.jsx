import React from 'react'
import { useEffect } from 'react'
import movieapi from '../../common/apis/movieapi'
import { APIkey } from '../../common/apis/Movieapikeys'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Movielisting from '../Movielisting/Movielisting'
import {useDispatch} from 'react-redux'
import { addmovies } from '../../features/movies/movieslice'

function Home() {
    const movietext = 'hary'
    const dispatch = useDispatch()
    useEffect(()=>{
        const fetchmovie = async()=>{
            const response = await movieapi.get(`?apikey=${APIkey}&s=${movietext}&type=movie`).catch((er)=>{
                console.log(er)
            })
         //  console.log(response.data)
           dispatch(addmovies(response.data))
        }
        fetchmovie()
        
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
