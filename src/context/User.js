/* eslint-disable react-hooks/exhaustive-deps */

import { useQuery } from '@apollo/client'
import { createContext, useEffect, useState } from 'react'
import { GET_USER } from '../graphql/Auth'

const UserContext = createContext({})

const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const localToken = localStorage.getItem('token')
    if (localToken) {
      setToken(localToken)
    }
  }, [])

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token)
    }
  }, [token])

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
  }

  const value = {
    token,
    setToken,
    user,
    logout,
    setUser,
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export { UserContext, UserContextProvider }
