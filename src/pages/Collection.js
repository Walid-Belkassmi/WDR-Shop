import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../components/Container'
import HomePageProduct from '../components/HomePageProduct'
import { GET_COLLECTION } from '../graphql/collection/queries'

const Collection = () => {
  const [collection, setCollection] = useState(null)
  const { title } = useParams()

  const { loading, error, data, called } = useQuery(GET_COLLECTION, {
    variables: {
      handle: title,
    },
  })

  useEffect(() => {
    if (data) {
      setCollection(data.collectionByHandle)
    }
  }, [data])

  if (loading) return 'Submitting...'
  if (error) return `Submission error! ${error.message}`

  console.log(data.collectionByHandle)
  return (
    <Container>
      <div>
        <div>
          <h1 className="text-2xl font-semibold">Collection {title}</h1>
          {collection &&
            collection.products.edges.map((product, id) => {
              return <HomePageProduct key={id} title={product.node.title} />
            })}
        </div>
      </div>
    </Container>
  )
}

export default Collection
