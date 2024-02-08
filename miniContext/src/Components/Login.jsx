import React,{useContext, useState} from 'react'
import userContext from '../Context/userContext';

function Login() {

    const [userName, setuserName]=useState('');
    const [passward,setPassward]=useState('');

    const {setUser}=useContext(userContext);

    const handleButton=(e)=>{
        e.preventDefoult();
        setUser({userName,passward});
    }

    return (
        <div>
            <h2>Log-in</h2>
            <input type="text" value={userName}
            onChange={(e)=>setuserName(e.target.value)}
            placeholder='Username' />
            <input type="text" value={passward} 
            onChange={(e)=>setPassward(e.target.value)}
            placeholder='Passward' />
            <button onClick={handleButton}>Sumbit</button>
        </div>
    )
}

export default Login
