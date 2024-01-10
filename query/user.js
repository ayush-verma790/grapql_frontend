import dbConnect from "@/conn/conn";
import UserModel from "@/models/UserModel";

export const getAllUser = async () => {
  try {
    dbConnect();
    const data = await UserModel.find();
    return data;
  } catch (error) {
    return new Error(error.message);
  }
};
