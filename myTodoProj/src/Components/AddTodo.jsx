import React, { useState } from 'react'
import { addTodo, removeTodo } from '../Features/Todo/todoSlice';
import {useDispatch} from 'react-redux'


function AddTodo() {

    const [input,setInput] =useState('');
    const dispatch=useDispatch();

    const addTodoHandler=(e)=>{
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }

    const deleteHandler=()=>{
        
    }

    return (
        <>
            <form action="">

                <div className='flex justify-between'>
                    
                </div>

                <input type="text"
                    onChange={(e)=>{setInput(e.target.value)}}
                    value={input}
                    name="" 
                    className='border-b mr-10 outline-none font-[Nunito]'
                    id="" />
                <button
                    onClick={addTodoHandler}
                    type='submit'
                    className='font-[Nunito] '
                >Add Todo</button>
            </form>
        </>
    )
}


export default AddTodo
