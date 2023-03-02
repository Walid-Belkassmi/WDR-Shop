import { gql } from '@apollo/client'

const CREATE_USER_ADDRESS = gql`
mutation customerAddressCreate($address: MailingAddressInput!, $customerAccessToken: String!) {
  customerAddressCreate(address: $address, customerAccessToken: $customerAccessToken) {
    customerAddress {
      # MailingAddress fields
    }
    customerUserErrors {
      # CustomerUserError fields
    }
  }
}
`

export { CREATE_USER_ADDRESS }
