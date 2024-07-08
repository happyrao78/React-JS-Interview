import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState={
    todos:[{id:1, text:"Hello Happy"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state,action)=>{
            const todo={
                id:nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        updateTodo:(state,action)=>{

            const {id, text} = action.payload
            const todo = state.todos.find((todo)=>todo.id === id)
            if(todo){
                todo.text = text
            }
        },
        //brings desired id from action and matches it with current id and removed it
        removeTodo: (state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
    }
})
//exporting the reducers
export const {addTodo,updateTodo,removeTodo}= todoSlice.actions
export default todoSlice.reducer