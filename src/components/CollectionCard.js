import React from 'react'
import { Link } from 'react-router-dom'

const CollectionCard = ({ collection }) => {
  return (
    <Link to={`/collections/${collection.title}`}>
      <div className="bg-gray-50 dark:bg-gray-800 p-8">
        <div className="">
          <h2 className="text-xl text-gray-600 dark:text-white">
            {collection.title}
          </h2>
          <p className="text-xl font-semibold text-gray-800 dark:text-white mt-2"></p>
        </div>
        <div className="flex justify-center items-center mt-8 md:mt-24">
          <img
            className=""
            src="https://images.unsplash.com/photo-1551854269-93c58e58b410?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="soccer jersey"
            role="img"
          />
        </div>
      </div>
    </Link>
  )
}

export default CollectionCard
