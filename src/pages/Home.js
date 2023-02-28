import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    // <div className="container mx-auto">
    //   <div className="flex justify-center px-6 my-12">
    //     <div className="w-full xl:w-3/4 lg:w-11/12 flex">Home</div>
    //   </div>
    // </div>

    <div className="h-screen bg-gray-50 flex items-center">
      <section className="bg-cover bg-center py-32 w-full bg-[url('https://source.unsplash.com/random')]">
        <div className="container mx-auto text-left text-white">
          <div className="flex items-center">
            <div className="w-1/2">
              <h1 className="text-5xl font-medium mb-6">
                Welcome to My Agency
              </h1>
              <p className="text-xl mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                viverra euismod odio, gravida pellentesque urna varius vitae.
              </p>
              <Link
                href="#"
                className="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600"
              >
                Demo
              </Link>
            </div>
            <div className="w-1/2 pl-16">
              <img
                src="https://source.unsplash.com/random?ux"
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
