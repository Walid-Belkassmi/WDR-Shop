import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Input from '../components/Input'

const Cart = () => {
  return (
    <>
      <div>
        <body className="antialiased">
          <div className="bg-white shadow-sm sticky top-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 md:py-4">
              <div className="flex items-center justify-between md:justify-start">
                <button
                  type="button"
                  className="md:hidden w-10 h-10 rounded-lg -ml-2 flex justify-center items-center"
                >
                  <svg
                    className="text-gray-500 w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
                <div className="flex items-center space-x-4">
                  <div className="relative hidden md:block"></div>
                </div>
              </div>

              <div className="relative md:hidden">
                <Input
                  type="search"
                  className="mt-1 w-full pl-10 pr-2 h-10 py-1 rounded-lg border border-gray-200 focus:border-gray-300 focus:outline-none focus:shadow-inner leading-none"
                  placeholder="Search"
                ></Input>
                <svg
                  className="h-6 w-6 text-gray-300 ml-2 mt-3 stroke-current absolute top-0 left-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Link href="#" className="hover:underline hover:text-gray-600">
                  Home
                </Link>
                <span>
                  <svg
                    className="h-5 w-5 leading-none text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
                <Link href="#" className="hover:underline hover:text-gray-600">
                  Product
                </Link>
                <span>
                  <svg
                    className="h-5 w-5 leading-none text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
                <span>?</span>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
              <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                  <div x-data="{ image: 1 }" x-cloak>
                    <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                      <div
                        x-show="image === 1"
                        className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center"
                      >
                        <span className="text-5xl">1</span>
                      </div>

                      <div
                        x-show="image === 2"
                        className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center"
                      >
                        <span className="text-5xl">2</span>
                      </div>

                      {/* <div
                        x-show="image === 3"
                        className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center"
                      >
                        <span className="text-5xl">3</span>
                      </div> */}

                      {/* <div
                        x-show="image === 4"
                        className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center"
                      >
                        <span className="text-5xl">4</span>
                      </div> */}
                    </div>

                    <div className="flex -mx-2 mb-4">
                      {/* <template x-for="i in 4">
                        <div className="flex-1 px-2">
                          <button x-on:click="image = i" ? className="{ 'ring-2 ring-indigo-300 ring-inset': image === i }" className="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center">
                          <span x-text="i" className="text-2xl"></span>
                        </div>
                      </template> */}
                    </div>
                  </div>
                </div>
                <div className="md:flex-1 px-4">
                  <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                    Lorem ipsum dolor, sit amet consectetur, adipisicing elit.
                  </h2>
                  <p className="text-gray-500 text-sm">
                    By{' '}
                    <Link href="#" className="text-indigo-600 hover:underline">
                      WDR Corp.
                    </Link>
                  </p>

                  <div className="flex items-center space-x-4 my-4">
                    <div>
                      <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                        <span className="text-indigo-400 mr-1 mt-1">$</span>
                        <span className="font-bold text-indigo-600 text-3xl">
                          89,99
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm">
                        Inclusive of all Taxes.
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-500">
                    Lorem ipsum, dolor sit, amet consectetur adipisicing elit.
                    Vitae exercitationem porro saepe ea harum corrupti vero id
                    laudantium enim, libero blanditiis expedita cupiditate Link
                    est.
                  </p>

                  <div className="flex py-4 space-x-4">
                    <div className="relative">
                      <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                        Qty
                      </div>
                      <select className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>

                      <svg
                        className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                        />
                      </svg>
                    </div>

                    <button
                      type="button"
                      className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
        {/* <!-- partial --> */}
        {/* <script src='https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.7.3/dist/alpine.min.js'></script> */}
      </div>
    </>
  )
}

export default Cart