import { useQuery } from '@apollo/client'
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/User'
import { GET_USER, GET_USER_ACTIVE } from '../graphql/Auth'
import Container from '../components/Container'
import Button from '../components/Button'

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
    <Container>
      <div>
        <p className="text-3xl font-semibold mb-5">Profile</p>
        {user && (
          <div className="flex-col font-semibold text-gray-600">
            <div className="flex flex-col md:flex-row mb-2">
              <p className="mr-3 text-gray-400 min-w-[100px]">First name</p>
              <p className="capitalize">{user.firstName}</p>
            </div>
            <div className="flex flex-col md:flex-row mb-2">
              <p className="mr-3 text-gray-400 min-w-[100px]">Last name</p>
              <p className="capitalize">{user.lastName}</p>
            </div>
            <div className="flex flex-col md:flex-row mb-2">
              <p className="mr-3 text-gray-400 min-w-[100px]">Email</p>
              <p>{user.email}</p>
            </div>
          </div>
        )}
        <Button label={'Logout'} onClick={logout} />
      </div>
    </Container>
  )
}

export default Profile
