import { gql } from '@apollo/client'

const GET_PRODUCT = gql`
  query GetProduct($handle: String!) {
    product(handle: $handle) {
      title
      id
      description
      handle
      collections(first: 10) {
        nodes {
          handle
          id
        }
      }
      variants(first: 10) {
        edges {
          node {
            id
            title
            availableForSale
            weight
            image {
              url
            }
            price {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`

const HOME_PRODUCTS = gql`
  query {
    products {
      title
    }
  }
`
export { GET_PRODUCT, HOME_PRODUCTS }
