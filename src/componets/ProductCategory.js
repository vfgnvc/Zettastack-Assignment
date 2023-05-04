import axios from 'axios';
import './productCategory.css'
import React, { useEffect, useState } from 'react'

function ProductCategory() {
  const [categorys, setCategory] = useState([]);
  useEffect(() => {
    axios.get('https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099').then((res) => {
      console.log(res.data[0].table_menu_list)
      setCategory(res.data[0].table_menu_list)

    }).catch(Error)
  }, [])
  return (
    <div>
      <table class="table ">
        <thead>
        <tr>
          {
            categorys.map((category) =>
              <>

                
                  <th scope="col">{category.menu_category}</th>

                
              </>
            )
          }
         </tr> 

        </thead>

      </table>

    </div>
  )
}

export default ProductCategory