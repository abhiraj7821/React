import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About  from './Components/About/About.jsx'
import Contact from './Components/ContactUs/Contact.jsx'
import User from './Components/User/User.jsx'
import Github,{dataInfoLoader} from './Components/Github/Github.jsx'


// const router=createBrowserRouter([
//  {
//   path:'/',
//   element:<Layout></Layout>,
//   children:[
//     {
//       path:"",
//       element:<Home></Home>
//     },
//     {
//       path:"about",
//       element: <About></About>
//     },
//     {
//       path:"contact",
//       element:<Contact/>
//     }
//     ,{
//       path:"user/:userid",
//       element:<User/>
//     }
//   ]
//  }
// ]);

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route 
      loader={dataInfoLoader}
      path='github' 
      element={<Github/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
