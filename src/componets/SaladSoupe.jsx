import axios from 'axios';
import './saladSoupe.css'
import React, { useContext, useEffect, useState } from 'react'
import DataContext from './Context';

function SaladSoupe() {
    const [SaladSoupe, setSaladSoupe] = useState([]);
    const { removeCartIteams, AddCartIteams,cart} = useContext(DataContext);
    
    useEffect(() => {
        axios.get('https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099').then((res) => {
            //console.log(res.data[0].table_menu_list[0].category_dishes)
            setSaladSoupe(res.data[0].table_menu_list[0].category_dishes)

        }).catch(Error)
    }, [])
    
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
                                                    <td> <h5>{salad.dish_name}</h5> </td>
                                                </div>


                                                <div className="salad_price">
                                                    <td> <p>{salad.dish_currency}  {salad.dish_price}</p> </td>
                                                </div>


                                                <div className='dish_description'>
                                                    <td> <p>{salad.dish_description}</p> </td>
                                                </div>
                                                { salad.dish_Availability ?
                                                <div className="countHandler">
                                                    <button onClick={() => removeCartIteams(salad.dish_id)}> - </button>
                                                    <input
                                                        value={cart[salad.dish_id]}

                                                    />
                                                    <button onClick={() => AddCartIteams(salad.dish_id)}> + </button>
                                                    </div> : " "
                                                }
                                                    <div className='dish_Availability'>
                                                    {salad.dish_Availability ? <p>Custoimization Availabile</p> : <p>Not Availabile</p>}
   
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
