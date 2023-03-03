import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { UserContextProvider } from './context/User'
import Forgotten from './pages/Forgotten'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import Product from './components/ProductCard'
import Cart from './pages/Cart'
import Collections from './pages/Collections'
import PreCollection from './pages/PreCollection'
import Collection from './pages/Collection'

const App = () => {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<Profile />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/forgotten" element={<Forgotten />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/:gid" element={<Collection />} />
          <Route path="/preCollection" element={<PreCollection />} />
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App
