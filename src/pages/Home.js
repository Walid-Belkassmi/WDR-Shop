import React, { useContext } from 'react'
import { UserContext } from '../context/User'

const Home = () => {
  const { user } = useContext(UserContext)
  if (user) {
    console.log(user)
  }
  return <div>Home </div>
}

export default Home
