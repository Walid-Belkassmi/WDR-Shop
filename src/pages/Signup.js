import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Input from '../components/Input'

const Signup = () => {
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
                />
                <Input
                  id={'lastName'}
                  type={'text'}
                  placeholder={'Last Name'}
                  grow="grow"
                  label={'Last Name'}
                  ml={'md:ml-2'}
                  width="md:w-5/12"
                />
              </div>
              <Input
                id={'email'}
                type={'email'}
                placeholder={'Email'}
                grow="grow"
                label={'Email'}
                mb={'mb-4'}
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
                />
                <Input
                  id={'confirmPasssword'}
                  type={'password'}
                  placeholder={'Confirm password'}
                  grow="grow"
                  label={'Confirm password'}
                  ml={'md:ml-2'}
                  width="md:w-5/12"
                />
              </div>
              <div className="mb-6 text-center">
                <Button label={'Create account'} type="button" />
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
