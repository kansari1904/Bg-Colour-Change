import { useState } from 'react'
import './App.css'

function App() {
   const [color,setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-centre gap-3 bg-white  rounded-3xl bottom-12 inset-x-0 px-2 div2">

      <button className="text-white bg-red-700 p-1 rounded-xl w-13 " onClick={()=>(setColor("red"))}>Red</button>

      <button className="text-white bg-blue-700 p-1 rounded-xl w-13 " onClick={()=>(setColor("blue"))}>Blue</button>

      <button className="text-white bg-green-700 p-1 rounded-xl w-13" onClick={()=>(setColor("green"))}>Green</button>

      <button className="text-white bg-black p-1 rounded-xl w-13 " onClick={()=>(setColor("black"))}>Black</button>

      <button className="text-white bg-yellow-500 p-1 rounded-xl w-13 " onClick={()=>(setColor("yellow"))}>Yellow</button>
      </div>
    </div>
  )
}

export default App
