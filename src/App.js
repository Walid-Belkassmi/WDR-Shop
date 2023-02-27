import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Forgotten from './pages/Forgotten'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/forgotten" element={<Forgotten />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
