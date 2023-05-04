import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import './App.css';
import ProductCategory from './componets/ProductCategory';
import Navbar from './componets/Navbar';
import SaladSoupe from './componets/SaladSoupe';

function App() {
  const [products,setProducts]=useState([])
  
  useEffect(()=>{
    axios.get('https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099').then((res)=>{
      console.log(res.data[0])
      setProducts(res.data[0])
      
    }).catch(Error)
  }, [])
  
  return (
    <div className="App">
            <div className='container'>
           <Navbar restaurant_name={products.restaurant_name} />
          
          <ProductCategory  />
          <SaladSoupe/>
          </div>
  
    </div>
  );
}

export default App

