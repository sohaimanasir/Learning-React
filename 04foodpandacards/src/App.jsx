//import { useState } from 'react'
import './App.css'

function App(){
  const data= [{
    imageUrl:"https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Islamabad.jpg?width=720",
    title:"Islamabad"},
    {
      imageUrl:"https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Islamabad.jpg?width=720",
      title:"Islamabad"},
      {
        imageUrl:"https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Islamabad.jpg?width=720",
        title:"Islamabad"},
        {
          imageUrl:"https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Islamabad.jpg?width=720",
          title:"Islamabad"}
  ]
}
return (
  <div className="food-panda-cards">
    {data.map((ele)=>(
      <div className="cities">
        img
      </div>
    ))}
  </div>
)
  
    


export default App
