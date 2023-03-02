import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Input from '../components/Input'
import { useMutation } from '@apollo/client'
import { UserContext } from '../context/User'
import { LOGIN_USER } from '../graphql/Auth'

const Login = () => {
  const [email, setEmail] = useState('hello.bello@yopmail.com')
  const [password, setPassword] = useState('hello')
  const { token, setToken, user } = useContext(UserContext)
  const navigate = useNavigate()

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const [loginUser, { data, loading, error, called }] = useMutation(LOGIN_USER)

  if (loading) return 'Submitting...'
  if (error) return `Submission error! ${error.message}`

  const handleClickLogin = async () => {
    await loginUser({
      variables: {
        input: {
          email,
          password,
        },
      },
    })
  }

  if (
    called &&
    data.customerAccessTokenCreate.customerUserErrors.length === 0
  ) {
    setToken(data.customerAccessTokenCreate.customerAccessToken.accessToken)
  }

  if (data && data.customerAccessTokenCreate.customerUserErrors.length === 0) {
    navigate('/user')
  }

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div className="container mx-auto">
      <div className="flex justify-center px-6 my-12">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg bg-[url('https://source.unsplash.com/Mv9hjnEUHR4/600x80')]"></div>
          <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl text-center">Welcome Back!</h3>
            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              <Input
                mb={'mb-4'}
                label="Email"
                id={'email'}
                type="email"
                placeholder={'Email'}
                value={email}
                onChange={handleChangeEmail}
              />
              <Input
                id={'password'}
                type={'password'}
                placeholder={'Password'}
                mb={'mb-4'}
                label={'Password'}
                value={password}
                onChange={handleChangePassword}
              />
              <div className="mb-4">
                <input
                  className="mr-2 leading-tight"
                  type="checkbox"
                  id="checkbox_id"
                />
                <label className="text-sm" htmlFor="checkbox_id">
                  Remember Me
                </label>
              </div>
              <div className="mb-6 text-center">
                <Button label={'Login'} onClick={handleClickLogin} />
              </div>
              <hr className="mb-6 border-t" />
              <div className="text-center">
                <Link
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  to={'/auth/signup'}
                >
                  Create an Account!
                </Link>
              </div>
              <div className="text-center">
                <Link
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  to={'/auth/forgotten'}
                >
                  Forgot Password?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
