import gql from "graphql-tag";

export const mutation = gql`
  type Mutation {
    addUser(input: InputUser!): User!
    addBook(input: InputBook!): Book!
    addCategory(input: InputCategory!): Category!
  }
  type User {
    name: String!
    age: Int!
    gender: String!
  }
  type Book {
    title: String!
    price: Int!
    categoryId: String!
  }
  type Category {
    _id: ID!
    name: String!
    description: String!
  }
  input InputUser {
    name: String!
    age: Int!
    gender: String!
  }
  input InputBook {
    title: String!
    price: Int!
    categoryId: String!
  }
  input InputCategory {
    name: String!
    description: String!
  }
`;
