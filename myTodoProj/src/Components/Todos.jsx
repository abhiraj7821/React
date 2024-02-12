import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {toggleComplete,deleteTodo} from '../Features/Todo/todoSlice'
import EditableText from './EditableText';


function Todos() {
    const todos=useSelector(State=>State.todos)
    const dispatch=useDispatch();
   
    
    return (
        <>
        <div className='flex justify-between my-5'>
            <h1 className='text-3xl font-[Nunito] font-bold '>Todos</h1>
            <div className='gap-5 flex'>
                <button
                onClick={()=>{dispatch(deleteTodo())}}
                ><i className={`fa-solid fa-trash text-red-400 hover:text-red-600 transition-all `} ></i></button>
            </div>
        </div>
        <ul>
            {todos.map((todo)=>(
                <li key={todo.id} >
                    <div className='flex flex-row justify-start items-center'>
                        <input type="checkbox" 
                            className={`appearance-none mr-5 border rounded-full  h-3 w-3  ${todo.completed ?  "border-pink-500" : "border-blue-500" }`}
                            onChange={()=>{dispatch(toggleComplete(todo.id))
                        }}/>
                        <EditableText initialText={todo.text} />
                    </div>
                </li>
                ))
            }
        </ul>
        </>
    )
}

export default Todos