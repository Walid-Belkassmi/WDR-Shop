import { gql } from '@apollo/client'

const REGISTER_USER = gql`
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        firstName
        lastName
        email
      }
      customerUserErrors {
        field
        message
        code
      }
    }
  }
`

const LOGIN_USER = gql`
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        accessToken
      }
      customerUserErrors {
        message
      }
    }
  }
`

const GET_USER = gql`
  query {
    customer(customerAccessToken: "b1bfb602b934d92daf685611540d53bd") {
      id
      firstName
      lastName
      acceptsMarketing
      email
      phone
    }
  }
`

// addresses(first: 5) {
//   edges {
//     node {
//       id
//       address1
//       address2
//       city
//       country
//       zip
//       phone
//     }
//   }
// }

const GET_USER_ACTIVE = gql`
  query getUser($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      id
      firstName
      lastName
      acceptsMarketing
      email
      phone
    }
  }
`

export { REGISTER_USER, LOGIN_USER, GET_USER, GET_USER_ACTIVE }
