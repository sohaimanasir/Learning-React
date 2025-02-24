import { useState } from 'react'
import './App.css'

function App() {
const data =[
  {title: "Sohaima"},
  {title: "Anusha"},
  {title: "Mehrab"},
  {title: "Tuba"},
  {title: "Shameen"}
]


  return (
    <>
    <div className="main">
    {data.map((ele)=>(
  <div className="card">
    <h1>{ele.title}</h1>
    {/* <h2>{subTitle}</h2>
    <h3>{description}</h3> */}
  </div>
  )
)}</div>
</>
)}

export default App
