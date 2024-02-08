import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import { addTodo } from "../Features/Todo/todoSlice";

function AddTodo() {

    const [input,setInput]=useState('');
    const dispatch=useDispatch();

    const addTodoHandler=(e)=>{
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('');
    }

    return (
        <form onSubmit={addTodoHandler}>
            <input type="text" 
            placeholder="Enter a Todo"
            className=""
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            />
            <button type="submit"
            className="">Add Todo</button>
            
        </form>
    )
}

export default AddTodo
