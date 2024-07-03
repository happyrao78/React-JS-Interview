import { useState } from 'react'
import './App.css'
import {ToDoProvider} from "./Context"
function App() {
  const [todos,setTodos]= useState([]);

const addTodo= (todo)=>{
  setTodos((prev)=> [{id:Date.now(),...todo}, ...prev])//for getting the previous todo values also
}
  return (
    <ToDoProvider value={{todos,addTodo,updateTodo,deleteTod,toggleComplete}}>
      <div className='bg-[#172842] min-h-screen py-8'>
        <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
          <h1 className='text-2xl font-bold text-center mb-8 mt-2'>Manage Your Todos</h1>
          <div className='mb-4'></div>
          <div className='flex-wrap flex gap-y-3'></div>
        </div>
      </div>
    </ToDoProvider>
  )
}

export default App
