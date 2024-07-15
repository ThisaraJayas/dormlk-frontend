import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { Button } from "@/components/ui/button"
// import Header from './PageComponents/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
     
      {/* <Link to={''}>
        <a>Go to About Page</a>
      </Link> */}

    
    </>
  )
}

export default App
