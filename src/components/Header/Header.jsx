import React from 'react'
import './Header.scss'
function Header() {
  return (
    <div className='header'>
        <div className='logo'>movie app</div>
        <div className='userimage'>
            <img src='https://www.sony.net/Products/di_photo-gallery/images/extralarge/1816.JPG' alt='user'/>
        </div>
      
    </div>
  )
}

export default Header
