import { useState } from "react"


function App() {
  const [color,setColor]=useState("black")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
    <div className=" fixed flex flex-wrap inset-x-0 justify-center bottom-12 px-2">
    <div className="flex flex-wrap justify-center rounded-3xl bg-white gap-3 shadow-lg px-3 py-2">
      <button onClick={()=> setColor("red")}  className="outline-none  px-4 py-1 rounded-full text-black shadow-lg"
      style={{backgroundColor: "red"}}>Red</button>
      <button  onClick={()=>setColor("yellow")} className="outline-none  px-4 py-1 rounded-full text-black shadow-lg"
      style={{backgroundColor: "yellow"}}>Yellow</button>
      <button onClick={()=>setColor("green")} className="outline-none  px-4 py-1 rounded-full text-black shadow-lg"
      style={{backgroundColor: "green"}}>Green</button>
      <button onClick={()=>setColor("blue")} className="outline-none  px-4 py-1 rounded-full text-black shadow-lg"
      style={{backgroundColor: "blue"}}>Blue</button>
      <button onClick={()=>setColor("purple")} className="outline-none  px-4 py-1 rounded-full text-black shadow-lg"
      style={{backgroundColor: "purple"}}>Purple</button>
      <button onClick={()=>setColor("gray")} className="outline-none  px-4 py-1 rounded-full text-black shadow-lg"
      style={{backgroundColor: "gray"}}>Gray</button>
       <button onClick={()=>setColor("orange")} className="outline-none  px-4 py-1 rounded-full text-black shadow-lg"
      style={{backgroundColor: "orange"}}>Orange</button>
       <button onClick={()=>setColor("pink")} className="outline-none  px-4 py-1 rounded-full text-black shadow-lg"
      style={{backgroundColor: "pink"}}>Pink</button>
       <button onClick={()=>setColor("olive")} className="outline-none  px-4 py-1 rounded-full text-black shadow-lg"
      style={{backgroundColor: "olive"}}>Olive</button>
       <button onClick={()=>setColor("brown")} className="outline-none  px-4 py-1 rounded-full text-black shadow-lg"
      style={{backgroundColor: "brown"}}>Brown</button>
    </div>

    </div>

    </div>
  )
}

export default App
