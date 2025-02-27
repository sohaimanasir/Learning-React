import { useState } from 'react'

import './App.css'

function App() {
const [api, setApi] = useState('');
const getBlogData = async () => {
  const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php?s=")
  const data = await response.json()

  console.log(data);
  
}
getBlogData()
  return (
    <>
  <p>{api}</p>
    </>
  )
}

export default App
