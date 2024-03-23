import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }} >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-1 px-2">
        <div className="flex flex-wrap justify-center px-8 py-2 rounded-xl gap-3 bg-white shadow-lg">
          <button className="px-8 py-2 rounded-xl " style={{backgroundColor:"red"}} onClick={()=>setColor("red")}> Red</button>
          <button className="px-8 py-2 rounded-xl " style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}> Orange</button>
          <button className="px-8 py-2 rounded-xl " style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}> Yellow</button>
          <button className="px-8 py-2 rounded-xl " style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}> Blue</button>
          <button className="px-8 py-2 rounded-xl " style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
          <button className="px-8 py-2 rounded-xl " style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
        </div>
         
      </div>
    </div>

  )
}

export default App
