import { gql } from '@apollo/client'

const CREATE_ADDRESS = gql`
  mutation customerAddressCreate(
    $address: MailingAddressInput!
    $customerAccessToken: String!
  ) {
    customerAddressCreate(
      address: $address
      customerAccessToken: $customerAccessToken
    ) {
      customerAddress {
        address1
        address2
        city
        country
        phone
        zip
      }
      customerUserErrors {
        message
      }
    }
  }
`

export { CREATE_ADDRESS }
