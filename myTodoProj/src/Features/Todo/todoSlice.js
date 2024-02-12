import { createSlice,nanoid } from "@reduxjs/toolkit"

const initialState={
    todos:[{
        id:1,
        text:"Do a very important task",
        completed:false
    },{
        id:2,
        text:"Do a very important task",
        completed:false
    },{
        id:3,
        text:"Do a very important task",
        completed:false
    },{
        id:4,
        text:"Do a very important task",
        completed:false
    },]
}

export const todoSlice =createSlice({
    name:'todo',
    initialState,
    reducers:{
        //state is the state at which our store is present today
        //actions are the items that we get and to access it we use payload
        //in add todo we get text or todo
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload,
                completed:false
            }
            state.todos.push(todo)
        },
        
        toggleComplete:(state,action)=>{
            // state.todos=state.todos.map((todo)=>{todo.id===action.payload.id ? todo.completed=!todo.completed : todo})
            state.todos.forEach(todo => {
                if(todo.id==action.payload){
                    todo.completed=!todo.completed
                }
            });
        },
        deleteTodo:(state,action)=>{
            state.todos=state.todos.filter((todo) => todo.completed==false);
        }

    }
})

export const {addTodo,removeTodo,updateTodo,toggleComplete,deleteTodo}=todoSlice.actions

export const todoReducer= todoSlice.reducer