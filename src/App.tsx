import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { Button } from "@/components/ui/button"
import Header from './PageComponents/Header'
import { Route, Routes } from 'react-router-dom'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <Routes>

      </Routes>
     
      {/* <Link to={''}>
        <a>Go to About Page</a>
      </Link> */}

    
    </>
  )
}

export default App
