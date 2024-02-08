import { useState } from 'react'

import './App.css'
import userContextProvider from './Context/userContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <userContextProvider>
      <h1>React and Chai Context API</h1>
      <Login/>
      <Profile/>
    </userContextProvider>
  )
}

export default App
