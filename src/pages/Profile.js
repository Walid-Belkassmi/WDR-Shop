import { useQuery } from '@apollo/client'
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/User'
import { GET_USER, GET_USER_ACTIVE } from '../graphql/Auth'

const Profile = () => {
  const { user, setUser, token, logout } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate('/auth/login')
    }
  }, [token])

  const { loading, error, data, called } = useQuery(GET_USER_ACTIVE, {
    variables: { customerAccessToken: token },
  })

  if (loading) return 'Fetching...'
  if (error) return `Submission error! ${error.message}`

  if (called && !loading) {
    if (data) {
      setUser(data.customer)
    }
  }

  console.log(user)

  return (
    <div>
      <p className="text-3xl">Profile</p>
      {user && (
        <>
          <div>
            <p>{user.firstName}</p>
          </div>
          <div>
            <p>{user.lastName}</p>
          </div>
          <div>
            <p>{user.email}</p>
          </div>
        </>
      )}
      <button className="border m-2 p-2 " onClick={logout}>
        logout
      </button>
    </div>
  )
}

export default Profile
