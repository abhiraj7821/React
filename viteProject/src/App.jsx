import { useState } from 'react'
import './App.css'
import Product from './Components/Product'

function App() {

  let macDetails={
    name:"Macbook Air",
    dic:"MacBook Air with M1 is an incredibly portable laptop — it's nimble and quick, with a silent, fanless design and a beautiful Retina display",
    imgSrc:"https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
  };

  let RamMandir={
    name:"Ram Mandir",
    dic:"The Ram Mandir is a Hindu temple under construction in Ayodhya, Uttar Pradesh, India. It is located at the site of Ram Janmabhoomi, the hypothesized birthplace of Rama, a principal deity of Hinduism.",
    imgSrc:"https://media.cnn.com/api/v1/images/stellar/prod/230915082701-04-india-ram-mandir-rebuild.jpg?c=original"
  }
  

  return (
    <div className='flex justify-center items-center h-[100vh] w-[100vw]'>
      <Product macDetails={macDetails}></Product>
      <Product macDetails={RamMandir}></Product>
    </div>
  )
}

export default App
