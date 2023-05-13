import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import './App.css';
import ProductCategory from './componets/ProductCategory';
import Navbar from './componets/Navbar';
import SaladSoupe from './componets/SaladSoupe';
import { DataProvider } from './componets/Context';
import Barnyard from './componets/Barnyard';

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099').then((res) => {
      //console.log(res.data[0])
      setProducts(res.data[0])

    }).catch(Error)
  }, [])

  return (
    <div className="App">
      <div className='container'>
        <DataProvider>
          <Router>
          <Navbar restaurant_name={products.restaurant_name} />
          <ProductCategory />
          <Routes>
          <Route path='/' element={<SaladSoupe />} />
          <Route path='/barnyaad' element={<Barnyard />} />
          
          
          
        </Routes>
        </Router>
        </DataProvider>
      </div>

    </div>
  );
}

export default App

