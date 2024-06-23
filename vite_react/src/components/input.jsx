import React from 'react'
import { useState } from 'react'

const Input = () => {
    const [text,setText]=useState('')

    const handleChange=(e)=>{
        setText(e.target.value)
    }
  return (
    <>
        <input 
            value={text}
            onChange={handleChange}
            placeholder='enter text'
        />
        <p>Your text here:{text}</p>
    </>
  )
}

export default Input