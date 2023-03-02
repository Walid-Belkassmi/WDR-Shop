import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import CartItem from '../components/CartItem'

const Cart = () => {
  return (
    // <div classNameName="container mx-auto">
    //   <div classNameName="flex justify-center px-6 my-12">
    //     <div classNameName="w-full xl:w-3/4 lg:w-11/12 flex">Home</div>
    //   </div>
    // </div>
    // <p>Hello</p>

    //     <style>
    //     @layer utilities {
    //     input[type="number"]::-webkit-inner-spin-button,
    //     input[type="number"]::-webkit-outer-spin-button {
    //       -webkit-appearance: none;
    //       margin: 0;
    //     }
    //   }
    // </style>

    <div className="h-screen bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          <CartItem
            id={'1'}
            title={'Nike Air Max 2019'}
            size={'36EU - 4US'}
            src={
              'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            }
            // onClickSubstract={}
            // onClickAdd={}
            itemCount={'1'}
            price={'120'}
            currencyType={'€'}
            // onClickRemoveItem={}
          />
        </div>

        {/* <!-- Sub total --> */}

        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">$129.99</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">$4.99</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">$134.98 USD</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Check out
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
