import dbConnect from "@/conn/conn";
import BookModel from "@/models/BookModel";
import CategoryModel from "@/models/CategoryModel";
import UserModel from "@/models/UserModel";

export const addUser = async (_, input) => {
  try {
    dbConnect();
    const {
      input: { name, age, gender },
    } = input;
    const newUser = new UserModel({ name, age, gender });
    const savedUser = await newUser.save();
    if (!savedUser) return new Error("Failed to insert the data");
    return savedUser;
  } catch (error) {
    return new Error(error.message);
  }
};
export const addBook = async (_, input) => {
  try {
    dbConnect();
    const {
      input: { name, price, categoryId },
    } = input;
    const newBook = new BookModel({ name, price, categoryId });
    const savedBook = await newBook.save();
    if (!savedBook) return new Error("Failed to insert the data");
    return savedBook;
  } catch (error) {
    return new Error(error.message);
  }
};
export const addCategory = async (_, input) => {
  try {
    dbConnect();
    const {
      input: { title, description },
    } = input;
    // console.log({ input });
    const newCategory = new CategoryModel({ title, description });
    const savedCategory = await newCategory.save();
    console.log({ savedCategory });
    if (!savedCategory) return new Error("Failed to insert the data");
    return savedCategory;
  } catch (error) {
    return new Error(error.message);
  }
};
