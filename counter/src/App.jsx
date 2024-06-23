import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [value,setValue]= useState(0)
  // let value =10;
const addValue = ()=>{
  if(value >= 36){
    alert('Cannot increase value more than 20')
  }
  else{
  // value = value + 1;
  setValue(prevValue => prevValue+1);//prevValue is the previous value of the state and  it is used to update the state and  it is  a callback function
  setValue(prevValue => prevValue+1);
  setValue(prevValue => prevValue+1);
  setValue(prevValue => prevValue+1);
  setValue(prevValue => prevValue+1);
  setValue(prevValue => prevValue+1);

  }
  // console.log(`Value is ${value}`);
}
const decValue = ()=>{
  if(value <=0){
    alert('Cannot decrease value less than 0')
  }
  else{
  value = value - 1;
  setValue(value);
  }
  // console.log(`Value is ${value}`);
}
  return (
    <>
      <h1>Happy Yadav</h1>
      <h2>Counter Value: {value}</h2>
      <button
      onClick={addValue}
      >Increase Value</button>
      <br />
      <br />
      <button
      onClick={decValue}
      >Decrease Value</button>
      <p>{value}</p>
    </>
  )
}

export default App
