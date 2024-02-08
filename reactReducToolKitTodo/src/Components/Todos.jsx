import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { removeTodo } from '../Features/Todo/todoSlice'
import { updateTodo } from '../Features/Todo/todoSlice'

function Todos() {

    //geting value of todos
    const todos=useSelector(state=>state.todos);
    const dispatch=useDispatch();


    return (
        <>
            <div className=''>Todos</div>
            <ul>
                {todos.map((todo)=>(
                    <li className='' key={todo.id}>
                        <div className='' >{todo.text}</div>
                        <button 
                        onClick={()=>dispatch(removeTodo(todo.id))}
                        >Delete</button>
                        <button type="submit"
                        className=""
                        onClick={()=>dispatch(updateTodo(todo.id,todo.text))}
                        >Update</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todos
