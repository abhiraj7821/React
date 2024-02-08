import { createSlice ,nanoid} from "@reduxjs/toolkit";

const initialState={
    todos:[{
        id:1,
        text:"Jai Shree Ram"
    }]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,actions)=>{
            const todo={
                id:nanoid(),
                text:actions.payload
            };
            state.todos.push(todo);
        },
        removeTodo:(state,actions)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==actions.payload)
        },
        updateTodo:(state,actions)=>{
            state.todos=state.todos.map((todo)=>todo.id==actions.id ? actions.payload : todo)
        }
    }
})

export const {addTodo,removeTodo,updateTodo} =todoSlice.actions;

export default todoSlice.reducer