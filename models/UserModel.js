import mongoose from "mongoose";

const schema = mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
});

const UserModel = mongoose.models.user || mongoose.model("user", schema);
export default UserModel;
