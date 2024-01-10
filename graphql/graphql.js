import { GraphQLClient } from "graphql-request";

export const request = async (query, variables) => {
  const client = new GraphQLClient("http://localhost:3000/api/graphql");
  try {
    return variables ? client.request(query, variables) : client.request(query);
  } catch (error) {
    return new Error(error.message);
  }
};
