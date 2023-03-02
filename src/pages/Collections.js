import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { GET_ALL_COLLECTIONS } from '../graphql/Collection'
import Container from '../components/Container'

const Collections = () => {
  const [collections, setCollections] = useState(null)
  const { loading, error, data, called } = useQuery(GET_ALL_COLLECTIONS)

  useEffect(() => {
    if (data) {
      setCollections(setCollections(data.collections.edges))
    }
  }, [called])

  if (loading) return 'Submitting...'
  if (error) return `Submission error! ${error.message}`

  console.log(data)

  return (
    <Container>
      <p>Collections</p>

      {collections &&
        collections.map((collection) => {
          return <p>hello</p>
        })}
    </Container>
  )
}

export default Collections
