import { getAllUser } from "@/query/user.js";
export const queryResolvers = {
  Query: {
    getAllUser: getAllUser,
  },
  UserList: {
    books: (parent) => {
      console.log({ parent });
      return null;
    },
  },
};
