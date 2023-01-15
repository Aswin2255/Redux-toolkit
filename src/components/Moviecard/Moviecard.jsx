import React from 'react'
import { Link } from 'react-router-dom'
import "./movicard.scss"
function Moviecard(props) {
    const {data} = props
  return (
    <div className='card-item'>
        <Link to={`/movies/${data.imdbID}`}>
        <div className='card-inner'>
            <div className='card-top'>
                <img src={data.Poster} alt={data.Title}/>
            </div>
            <div className='card-bottom'>
                <div className='card-info'>
                    <h4>{data.Title}</h4>
                    <p>{data.year}</p>
                </div>
            </div>
        </div>
        </Link>
      
    </div>
  )
}

export default Moviecard
