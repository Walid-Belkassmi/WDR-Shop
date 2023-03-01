import { gql } from '@apollo/client'

const GET_ALL_COLLECTIONS = gql`
  query {
    collections(first: 5) {
      edges {
        node {
          id
          title
          products(first: 5) {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    }
  }
`

export { GET_ALL_COLLECTIONS }
