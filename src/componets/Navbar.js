import React, { useContext } from 'react'
import { BsFillCartFill } from 'react-icons/bs'
import './navbar.css';
import DataContext from './Context';

function Navbar({ restaurant_name }) {
  const {getTotalCart} = useContext(DataContext);
  const totalcart = getTotalCart();
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
          <span class='badge badge-warning' id='lblCartCount'> {totalcart} </span>
        </div>
      </div>



    </div>
  )
}

export default Navbar