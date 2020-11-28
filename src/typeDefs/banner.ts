import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    banners(
      page: Int
      search: String
      limit: Int
      sort: String
      type: String
      active: Boolean
    ): bannerRes
    banner(id: String!): Banner
  }

  extend type Mutation {
    saveBanner(
      id: String!
      link: String
      heading: String
      img: String!
      type: String
      active: Boolean
    ): Banner
    deleteBanner(id: ID!): Boolean
  }

  type Banner {
    id: ID!
    link: String
    heading: String
    img: String
    type: String
    active: Boolean
    createdAt: String!
    updatedAt: String!
  }

  type bannerRes {
    data: [Banner]
    count: Int
    pageSize: Int
    page: Int
  }
`
