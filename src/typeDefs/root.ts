import { gql } from 'apollo-server-express'

export default gql`
  directive @admin on FIELD_DEFINITION
  directive @vendor on FIELD_DEFINITION
  directive @auth on FIELD_DEFINITION
  directive @guest on FIELD_DEFINITION
  directive @demo on FIELD_DEFINITION

  type Query {
    _: String
  }

  type Mutation {
    _: String
  }

  type Subscription {
    _: String
  }
`
