import { gql } from "graphql-request";

export const query = gql`
  type Query {
    getAllUser: [UserList!]
  }
  type UserList {
    _id: ID!
    name: String!
    age: Int!
    gender: String!
    books: [Book!]
  }
`;
