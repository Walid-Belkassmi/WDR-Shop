import { useQuery } from '@apollo/client'
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/User'
import { GET_USER, GET_USER_ACTIVE } from '../graphql/Auth'

const Profile = () => {
  const { user, setUser, token, logout } = useContext(UserContext)
  const navigate = useNavigate()
  const { loading, error, data, called } = useQuery(GET_USER_ACTIVE, {
    variables: { customerAccessToken: token },
  })

  // useEffect(() => {
  //   if (!loading && called) {
  //     setUser(data.customer)
  //   }
  // }, [token])

  // if (!loading && called) {
  //   console.log(user)
  // }

  useEffect(() => {
    if (!token) {
      navigate('/auth/login')
    }
  }, [token])

  return (
    <div>
      Profile
      <button className="border m-2 p-2 " onClick={logout}>
        logout
      </button>
    </div>
  )
}

export default Profile
