import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className=" bg-gray-50 flex items-center">
      <section className="bg-cover bg-center py-40 w-full bg-[url('https://images.unsplash.com/photo-1602472097151-72eeec7a3185?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80')]">
        <div className="container mx-auto text-left text-white">
          <div className="flex items-center">
            <div className="w-1/2">
              <h1 className="text-5xl font-medium mb-6">
                WDR le sport avant tout !
              </h1>
              <p className="text-xl mb-12">
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
  )
}

export default Home
