import { addUser, addBook, addCategory } from "@/mutation/user.js";
export const mutationResolvers = {
  Mutation: {
    addUser,
    addCategory,
    addBook,
  },
};
