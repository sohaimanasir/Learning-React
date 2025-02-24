import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div className="card">
    <h1>Title</h1>
    <h2>Sub-Title</h2>
    <h3>Description</h3>
  </div>
    </>
  )
}

export default App
