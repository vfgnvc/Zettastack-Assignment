import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";


 const DataContext = createContext();

 const GetDefultCart=()=>{
  let cart={};
  for(let i=100000001;i<=100000007;i++){
    cart[i]=0;
  }
  return cart;
}

export function DataProvider(props) {
    const [data, setData] = useState([]);
    //const [saladData, setSaladData] = useState([]);
    const [cart, SetCart] = useState(GetDefultCart())

   // console.log(cart);
   
   const getTotalCart = ()=>{
    let totalCart = 0;
    for(const item1 in cart){
      if(cart[item1]>0){
        totalCart += cart[item1]
      }
      
   }
    return totalCart;
  }

    const AddCartIteams=(itemId)=>{

      SetCart((prvese)=>({...prvese,[itemId]: prvese[itemId] + 1}))
    }
    const removeCartIteams=(itemId)=>{
  
      SetCart((prvese)=>({...prvese,[itemId]: prvese[itemId] - 1}))
    }
  
    
    useEffect(() => {
      axios.get('https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099')
        .then(response => {
          console.log(response.data[0].table_menu_list[1].category_dishes);
          setData(response.data[0].table_menu_list[1].category_dishes)
          console.log(setData.dish_id)}
          )
    
        .catch(error => console.error(error));
    }, []);
  
    return (
      <DataContext.Provider value={{ data,AddCartIteams,removeCartIteams,cart,getTotalCart}}>
        {props.children}
      </DataContext.Provider>
    );
  }

  export default DataContext;