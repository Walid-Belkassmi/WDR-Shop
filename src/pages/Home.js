import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HomePageProduct from '../components/HomePageProduct'
import { HOME_PRODUCTS } from '../graphql/product/queries'

const Home = () => {
  return (
    <>
      <div className=" bg-gray-50 flex items-center">
        <section className="bg-cover bg-center py-32 w-full bg-[url('https://images.unsplash.com/photo-1602472097151-72eeec7a3185?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80')]">
          <div className="container mx-auto text-left text-white">
            <div className="flex items-center">
              <div className="w-1/2">
                <h1 className="text-5xl font-medium mb-6 ml-6">
                  WDR le sport avant tout !
                </h1>
                <p className="text-xl mb-12 ml-6">
                  Ce sont les meilleures équipes, Sie sind die allerbesten
                  Mannschaften The main event Die Meister, die Besten, les
                  meilleures équipes, the champions !
                </p>
                <Link
                  className="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600"
                  to={'/collection'}
                >
                  Collection
                </Link>
              </div>
              <div className="w-1/2 pl-16">
                <img
                  src="https://images.unsplash.com/photo-1551854304-9235bf86ef71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  className="h-64 w-full object-cover rounded-xl"
                  alt="Layout img"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <h2 className="mt-2 font-serif text-2xl font-bold sm:text-4xl">
              Must Haves
            </h2>
            <p className="mt-8 text-xl text-gray-700">
              Some of our favourite picks this week.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-4">
            <HomePageProduct
              src={
                'https://images.unsplash.com/photo-1512144253214-d94e86cd9189?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80'
              }
              title={'NFL Jerseys'}
            />
            <HomePageProduct
              src={
                'https://images.unsplash.com/photo-1552066379-e7bfd22155c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8amVyc2V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
              }
              title={'Brazil Jersey'}
            />
            <HomePageProduct
              src={
                'https://images.unsplash.com/photo-1577212017184-80cc0da11082?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
              }
              title={'Arsenal Jersey'}
            />
            <HomePageProduct
              src={
                'https://images.unsplash.com/photo-1533548893636-3eac05d3bde7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
              }
              title={'NFL Jersey'}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
