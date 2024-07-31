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
import PostAdd from './pages/PostAdd'
import Post from './pages/Post'
import Footer from './PageComponents/Footer'
import Item from './pages/Item'
import Store from './pages/Store'
import DefaulltHeader from './PageComponents/DefaulltHeader'
import MyPage from './pages/MyPage'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Header/> */}
    <DefaulltHeader/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/addpost' element={<Post/>}/>
        <Route path='/item' element={<Item/>}/>
        <Route path='/store' element={<Store/>}/>
        <Route path='/my/*' element={<MyPage/>}/>
      </Routes>
     <Footer/>
      {/* <Link to={''}>
        <a>Go to About Page</a>
      </Link> */}

    
    </>
  )
}

export default App
