import React,{useState} from "react";



function ChangeColor(){

    const [color,setColor]=useState("pink");  


    return(
    <>
        <div className="h-[100vh] w-[100vw]"
        style={{backgroundColor:color}}
        ></div>
        <div className="text-black absolute bottom-20 flex gap-20 border border-black p-2 w-[100vw] justify-center items-center bg-gray-200">
            <div className="bg-white p-2 pl-5 pr-5 rounded-full cursor-pointer" onClick={()=>{setColor("white")}}>White</div>
            <div className="bg-black p-2 pl-5 pr-5 rounded-full text-white cursor-pointer" onClick={()=>{setColor("black")}}>Black</div>
            <div className="bg-red-400 p-2 pl-5 pr-5 rounded-full cursor-pointer" onClick={()=>{setColor("red")}}>Red</div>
            <div className="bg-pink-400 p-2 pl-5 pr-5 rounded-full cursor-pointer" onClick={()=>{setColor("pink")}}>Pink</div>
            <div className="bg-pink-400 p-2 pl-5 pr-5 rounded-full cursor-pointer" onClick={()=>{setColor("green")}}>green</div>
        </div>
    </>
    )
}

export default ChangeColor;