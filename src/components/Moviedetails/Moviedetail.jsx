import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchasynchdetails, getdetails } from '../../features/movies/movieslice'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

function Moviedetail() {
  const dispatch = useDispatch()
  const {id} = useParams()
  console.log(id)
  const data = useSelector(getdetails)
  useEffect(()=>{
    console.log('worked')
    dispatch(fetchasynchdetails(id))
  },[dispatch,id])
  return (
    <div>
      <Header/>
    <div className='movie-section'>
      <div className='section-left'>
        <div className='movie-title'>{data.Title}</div>
        <div className='movie-rating'>
          <span>
            IMDB Rating <i className='fa fa-star'></i> : {data.imdbRating}
          </span>
          <span>
            IMDB Rating <i className='fa fa-star'></i> : {data.imdbRating}
          </span>
          <span>
            IMDB Rating <i className='fa fa-star'></i> : {data.imdbRating}
          </span>
          <span>
            IMDB Rating <i className='fa fa-star'></i> : {data.Year}
          </span>
        </div>
      </div>
    </div>
      <Footer/>
    </div>
  )
}

export default Moviedetail
