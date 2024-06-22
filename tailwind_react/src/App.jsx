import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  let myobj={
    name:"happy",
    username:"happy123",
    age:25,
  }
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-200 p-5 rounded-xl mb-4 '>Interview&You</h1>
     {/* <Card obj={myobj}/> */}
     <Card username="Happy Yadav" occupation='Founder'/>
     <Card username="Hishita Gupta" occupation='Founder' srcc='https://avatars.githubusercontent.com/u/159264060?v=4'/>
    </>
  )
}

export default App
