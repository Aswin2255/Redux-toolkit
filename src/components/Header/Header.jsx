import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchasynchmovies, fetchasyncshows } from '../../features/movies/movieslice'
import './Header.scss'
function Header() {
  const dispatch = useDispatch()
  const [term,setterm] = useState('')
  const handlesubmit = (e)=>{
    
    e.preventDefault()
    if (term === '') return alert('enter search term..')
    dispatch(fetchasynchmovies(term))
    dispatch(fetchasyncshows(term))
    setterm('')
  }
  return (
    <div className='header'>
        <div className='logo'>movie app</div>
        <div className='search-bar'>
          <form onSubmit={handlesubmit}>
          <input type='text' value={term} placeholder = 'search...' onChange={(e)=>{setterm(e.target.value)}}></input>
          <button><i className='fa fa-search'></i></button>

          </form>
        </div>
        <div className='userimage'>
            <img src='https://www.sony.net/Products/di_photo-gallery/images/extralarge/1816.JPG' alt='user'/>
        </div>
        
        
      
    </div>
  )
}

export default Header
