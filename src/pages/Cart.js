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
      <h1 className="mb-10 text-center text-2xl font-bold">Paniers</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          <CartItem
            id={'1'}
            title={'Paris Saint-Germain 2022/23 Stadium Domicile'}
            size={'M'}
            src={
              'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2655366c-e7b0-4d03-b2a1-6a8f618be6d2/maillot-de-football-dri-fit-paris-saint-germain-2022-23-stadium-domicile-pour-T2dRkh.png'
            }
            // onClickSubstract={}
            // onClickAdd={}
            itemCount={'1'}
            price={'89,99'}
            currencyType={'€'}
            // onClickRemoveItem={}
          />
        </div>

        {/* <!-- Sub total --> */}

        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Sous-total</p>
            <p className="text-gray-700">89,99 €</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">89,99 €</p>
              <p className="text-sm text-gray-700">inclus la TVA</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Valider
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
