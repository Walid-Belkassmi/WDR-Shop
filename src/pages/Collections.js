import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { GET_ALL_COLLECTIONS } from '../graphql/Collection'
import Container from '../components/Container'
import CollectionCard from '../components/CollectionCard'

const Collections = () => {
  const [collections, setCollections] = useState([])
  const { loading, error, data, called } = useQuery(GET_ALL_COLLECTIONS)

  useEffect(() => {
    if (data) {
      setCollections(data.collections.edges)
    }
  }, [data])

  if (loading) return 'Submitting...'
  if (error) return `Submission error! ${error.message}`

  console.log(data.collections.edges)

  return (
    <div className="2xl:container 2xl:mx-auto">
      <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
        <div>
          <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800  text-center ">
            Top Ventes
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8 md:mt-10">
          {collections &&
            collections.map((collection) => {
              return (
                <CollectionCard
                  key={collection.node.id}
                  collection={collection.node}
                />
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default Collections
