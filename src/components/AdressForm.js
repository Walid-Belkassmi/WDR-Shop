import { useMutation } from '@apollo/client'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Input from '../components/Input'
import { UserContext } from '../context/User'
import { CREATE_USER_ADDRESS } from '../graphql/User'

const AddressForm = () => {
  const [addressLine1, setAddressLine1] = useState('Bd de versaille')
  const [addressLine2, setAddressLine2] = useState('bat G4')
  const [city, setCity] = useState('Austerlitz')
  const [country, setCountry] = useState('France')
  const [postalCode, setPostalCode] = useState('75006')
  const [phone, setPhone] = useState('0808459274')
  const { user, token } = useContext(UserContext)
  const navigate = useNavigate()

  const handleChangeAddressLine1 = (e) => {
    setAddressLine1(e.target.value)
  }
  const handleChangeAddressLine2 = (e) => {
    setAddressLine2(e.target.value)
  }
  const handleChangeCity = (e) => {
    setCity(e.target.value)
  }
  const handleChangeCountry = (e) => {
    setCountry(e.target.value)
  }
  const handleChangePostalCode = (e) => {
    setPostalCode(e.target.value)
  }
  const handleChangePhone = (e) => {
    setPhone(e.target.value)
  }

  const [registerAddress, { data, loading, error, called }] =
    useMutation(CREATE_USER_ADDRESS)

  if (loading) return 'Submitting...'
  if (error) return `Submission error! ${error.message}`

  const handleClickRegisterAddress = async () => {
    await registerAddress({
      variables: {
        address: {
          address1: addressLine1,
          address2: addressLine2,
          city,
          country,
          zip: postalCode,
          phone,
        },
        customerAccessToken: token,
      },
    })
  }

  if (called) {
    console.log(data)
  }
  // if (called && data.customerCreate.customerUserErrors.length === 0) {
  //   setUser(data.customerCreate.customer)
  // }

  // if (data && data.customerCreate.customerUserErrors.length === 0) {
  //   navigate('/')
  // }

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
                  id={'address1'}
                  type={'text'}
                  placeholder={'Address Line 1'}
                  grow="grow"
                  mb={'mb-4 md:mb-0'}
                  label={'Address Line 1'}
                  mr={'md:mr-2'}
                  width="md:w-5/12"
                  value={addressLine1}
                  onChange={handleChangeAddressLine1}
                />
                <Input
                  id={'address2'}
                  type={'text'}
                  placeholder={'Address Line 2'}
                  grow="grow"
                  label={'Address Line 2'}
                  ml={'md:ml-2'}
                  width="md:w-5/12"
                  value={addressLine2}
                  onChange={handleChangeAddressLine2}
                />
              </div>
              <div className="mb-4 md:flex ">
                <Input
                  id={'city'}
                  type={'text'}
                  placeholder={'City'}
                  grow="grow"
                  mb={'mb-4 md:mb-0'}
                  label={'City'}
                  mr={'md:mr-2'}
                  width="md:w-5/12"
                  value={city}
                  onChange={handleChangeCity}
                />
                <Input
                  id={'country'}
                  type={'text'}
                  placeholder={'Country'}
                  grow="grow"
                  label={'Country'}
                  ml={'md:ml-2'}
                  width="md:w-5/12"
                  value={country}
                  onChange={handleChangeCountry}
                />
              </div>
              <div className="mb-4 md:flex ">
                <Input
                  id={'postalCode'}
                  type={'text'}
                  placeholder={'Postal code'}
                  grow="grow"
                  mb={'mb-4 md:mb-0'}
                  label={'Postal code'}
                  mr={'md:mr-2'}
                  width="md:w-5/12"
                  value={postalCode}
                  onChange={handleChangePostalCode}
                />
                <Input
                  id={'phone'}
                  type={'text'}
                  placeholder={'Phone'}
                  grow="grow"
                  label={'Phone'}
                  ml={'md:ml-2'}
                  width="md:w-5/12"
                  value={phone}
                  onChange={handleChangePhone}
                />
              </div>
              <div className="mb-6 text-center">
                <Button
                  label={'Create address'}
                  type="button"
                  onClick={handleClickRegisterAddress}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddressForm
