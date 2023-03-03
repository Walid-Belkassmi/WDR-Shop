import React from 'react'
import { useParams } from 'react-router-dom'

const Collection = () => {
  const { gid } = useParams()
  return <div>Collection {gid}</div>
}

export default Collection
