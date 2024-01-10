import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { query } from "@/schema/query";
import { mutation } from "@/schema/mutation.js";
import { queryResolvers } from "@/resolvers/quries";
import { mutationResolvers } from "@/resolvers/mutation";
import gql from "graphql-tag";

const typeDefs = gql`
  ${query}
  ${mutation}
`;

const resolvers = {
  ...queryResolvers,
  ...mutationResolvers,
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler(server, {
  context: async (req) => req,
});
export { handler as GET, handler as POST };
