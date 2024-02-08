import { useState } from 'react'
import './App.css'
import ChangeColor from './Components/ChangeColor'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChangeColor></ChangeColor>
    </>
  )
}

export default App
