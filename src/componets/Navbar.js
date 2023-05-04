import React from 'react'
import { BsFillCartFill } from 'react-icons/bs'
import './navbar.css';

function Navbar({ restaurant_name }) {
  return (
    <div className='navbar_detailes'>
      <div className='restaurant_name'>
        <h3>{restaurant_name}</h3>

      </div>
      <div className='leftside'>
        <div className='myoder'>
           <p>My oder</p>
        </div>
        <div className='restaurant_icon'>
          <BsFillCartFill />
        </div>
      </div>



    </div>
  )
}

export default Navbar