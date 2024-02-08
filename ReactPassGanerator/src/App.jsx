import { useState,useCallback,useEffect,useRef} from 'react'

function App() {


  const [length,setLength]= useState(8);
  const [charactersInculded,setcharactersInculded]=useState(false);
  const [numbersIncluded,setnumbersIncluded]=useState(false);
  const [passward,setPassward]=useState("");
  const passwordRef = useRef(null)

  
  const ganeratePass=useCallback(()=>{{
    let pass=""
    let alfabets="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const num="0123456789"
    const charactersToInc="!'()*+,-./:;<=>?@[]^_`{|}~"
    if(numbersIncluded) alfabets+=num
    if(charactersInculded) alfabets+=charactersToInc

    for(let i=1;i<=length;i++){
      let charpos=Math.floor(Math.random()*alfabets.length+1);
      pass+=alfabets.charAt(charpos);
    }
    setPassward(pass);
  }},[length,numbersIncluded,charactersInculded,setPassward]);

  useEffect(()=>{
    ganeratePass();
  },[length,numbersIncluded,charactersInculded,ganeratePass]);

  const copyPass=useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(passward);
  },[passward])


  return (
    <div className='w-[100vw] h-[100vh] bg-rose-400 flex justify-center items-center'>
      <div className='p-10 bg-orange-200 rounded-lg '>
        <h1 className='text-center text-slate-700 py-5'>Passward Ganerator</h1>
        <div className='w-full border border-slate-400 text-slate-700 rounded-xl  flex justify-between mb-4'>
          <input type="text" value={passward} ref={passwordRef} readOnly className='bg-transparent border-none outline-none appearance-none my-1 mx-2'/>
          <button onClick={copyPass} className='bg-rose-400 rounded-r-lg px-2 hover:bg-rose-700 hover:text-white transition-all ease-in-out duration-300'>copy</button>
        </div>
        <div className='flex gap-5 mb-5'>
          <input type="range" name="" value={length} min={5} max={20} id="length" onChange={(e)=>{
            setLength(e.target.value);
            ganeratePass();
          }}/>
          <label for="length">Length {length}</label>
          <input type="checkbox" id='number' onChange={()=>{
              setnumbersIncluded((prev)=>!prev);
          }}/>
          <label for="number">Number</label>
          <input type="checkbox" id='char' onChange={()=>{
              setcharactersInculded((prev)=>!prev);
          }}/>
          <label for="char">Characters</label>
        </div>
        <div className='flex justify-center '>
          <button onClick={ganeratePass} className='bg-rose-400 rounded-full px-2 py-1  hover:bg-rose-700 hover:text-white transition-all ease-in-out duration-300'>Ganerate Passward</button>
        </div>
      </div>
    </div>
  )
}

export default App
