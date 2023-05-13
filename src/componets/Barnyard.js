import React, { useContext } from 'react';
import DataContext from './Context';


function Barnyard() {
  const { data}  = useContext(DataContext);

  //const [barnyad, setBarnyad] = useState([]);

  // Move setBarnyad() inside the component body
  

  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.dish_name}</li>
        ))}
      </ul>
    </div>
  );
}


export default Barnyard