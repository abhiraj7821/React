import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {

    const data=useLoaderData();
    // const [data,setData]=useState([]);
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/abhiraj7821`).then((res)=>res.json()).then((res)=>{setData(res)})
    //     console.log(data);
    // },[])

    return (
        <>
        <div className='flex flex-col justify-center items-center bg-gray-500 text-white text-3xl'>
            <h1>Followers {data.followers}</h1>
            <img src={data.avatar_url} alt="Git Profile" width={300}/>
        </div>

        </>
    )
}

export default Github
export async function dataInfoLoader(){
    const res=await fetch(`https://api.github.com/users/abhiraj7821`);
    return res.json();
}