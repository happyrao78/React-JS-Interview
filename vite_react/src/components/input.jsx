import React from 'react'
import { useState } from 'react'

const Input = () => {
    const [text,setText]=useState('')
    const [age,setAge]=useState(18)

    const handleChange=(e)=>{
        setText(e.target.value)
    }
  return (
    <>
        <input 
            value={text}
            onChange={handleChange}
            placeholder='enter name'
        />
        <button onClick={()=> setAge(age+1)}>Increase</button>
        <p>Name:{text}</p>
        <p>Age:{age}</p>
    </>
  )
}

export default Input