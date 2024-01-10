import gql from "graphql-tag";

export const HELLO_WORLD = gql`
  query Query {
    hello
  }
`;
