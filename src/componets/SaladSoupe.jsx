import axios from 'axios';
import './saladSoupe.css'
import React, { useEffect, useState } from 'react'

function SaladSoupe() {
    const [SaladSoupe, setSaladSoupe] = useState([]);
    const [cartItems, setCartItems] = useState(0);
    useEffect(() => {
        axios.get('https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099').then((res) => {
            console.log(res.data[0].table_menu_list[0].category_dishes)
            setSaladSoupe(res.data[0].table_menu_list[0].category_dishes)

        }).catch(Error)
    }, [])
    function addToCart() {
        setCartItems(cartItems + 1);
        console.log(cartItems);
      }
    return (
        <div>
            <table className="table">
                <thead>
                    <tbody>
                        
                            {
                                SaladSoupe.map((salad) =>
                                <tr>
                                    <> 
                                    
                                        <div className="salad_container">
                                            <div className='first_division'>
                                               
                                            <div className="salad_name">
                                            <td> <h4>{salad.dish_name}</h4> </td>
                                            </div>
                                            
                                            
                                            <div className="salad_price">
                                               <td> <p>{salad.dish_currency}  {salad.dish_price}</p> </td>
                                            </div>
                                            

                                            <div className='dish_description'>
                                               <td> <p>{salad.dish_description}</p> </td>
                                            </div>
                                            <div className="buttonclick">
                                                 <button onClick={addToCart}>Add to Cart</button>
                                            </div>
                                            </div>
                                            <div className="second_division">
                                                <div className='dish_calories'>
                                                   <td> <p>{salad.dish_calories} Calories</p> </td>
                                                </div>
                                                <div className="salad_image">
                                                  <td>  <img src={salad.dish_image} alt='dishimage'></img> </td>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </>
                                    </tr>

                                )
                            }
                        
                    </tbody>
                </thead>
            </table>

        </div>
    )
}

export default SaladSoupe