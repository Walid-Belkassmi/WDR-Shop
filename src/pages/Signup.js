import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Input from '../components/Input'
import { REGISTER_USER } from '../graphql/Auth'

const Signup = () => {
  const [firstName, setFirstName] = useState('hello')
  const [lastName, setLastName] = useState('bello')
  const [email, setEmail] = useState('hello.bello@yopmail.com')
  const [password, setPassword] = useState('hello')
  const [passwordConfirm, setPasswordConfirm] = useState('hello')
  const navigate = useNavigate()

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value)
  }
  const handleChangeLastName = (e) => {
    setLastName(e.target.value)
  }
  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleChangePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value)
  }

  const [registerUser, { data, loading, error, called }] =
    useMutation(REGISTER_USER)

  if (loading) return 'Submitting...'
  if (error) return `Submission error! ${error.message}`

  const handleClickRegister = async () => {
    await registerUser({
      variables: {
        input: {
          firstName,
          lastName,
          email,
          password,
        },
      },
    })
  }

  if (called) {
    console.log(data)
  }

  if (data && data.customerCreate.customerUserErrors.length === 0) {
    navigate('/')
  }

  return (
    <div className="container mx-auto">
      <div className="flex justify-center px-6 my-12">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg bg-[url('https://source.unsplash.com/Mv9hjnEUHR4/600x80')]"></div>
          <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              <div className="mb-4 md:flex ">
                <Input
                  id={'firstName'}
                  type={'text'}
                  placeholder={'First Name'}
                  grow="grow"
                  mb={'mb-4 md:mb-0'}
                  label={'First Name'}
                  mr={'md:mr-2'}
                  width="md:w-5/12"
                  value={firstName}
                  onChange={handleChangeFirstName}
                />
                <Input
                  id={'lastName'}
                  type={'text'}
                  placeholder={'Last Name'}
                  grow="grow"
                  label={'Last Name'}
                  ml={'md:ml-2'}
                  width="md:w-5/12"
                  value={lastName}
                  onChange={handleChangeLastName}
                />
              </div>
              <Input
                id={'email'}
                type={'email'}
                placeholder={'Email'}
                grow="grow"
                label={'Email'}
                mb={'mb-4'}
                value={email}
                onChange={handleChangeEmail}
              />
              <div className="mb-4 md:flex ">
                <Input
                  id={'password'}
                  type={'password'}
                  placeholder={'Password'}
                  grow="grow"
                  mb={'mb-4'}
                  label={'Password'}
                  mr={'md:mr-2'}
                  width="md:w-5/12"
                  value={password}
                  onChange={handleChangePassword}
                />
                <Input
                  id={'confirmPasssword'}
                  type={'password'}
                  placeholder={'Confirm password'}
                  grow="grow"
                  label={'Confirm password'}
                  ml={'md:ml-2'}
                  width="md:w-5/12"
                  value={passwordConfirm}
                  onChange={handleChangePasswordConfirm}
                />
              </div>
              <div className="mb-6 text-center">
                <Button
                  label={'Create account'}
                  type="button"
                  onClick={handleClickRegister}
                />
              </div>
              <hr className="mb-6 border-t" />
              <div className="text-center">
                <Link
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  to={'/auth/forgotten'}
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="text-center">
                <Link
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  to={'/auth/login'}
                >
                  Already have an account? Login!
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
