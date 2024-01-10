import mongoose from "mongoose";

const schema = mongoose.Schema({
  name: String,
  description: String,
});

const CategoryModel =
  mongoose.models.category || mongoose.model("category", schema);
export default CategoryModel;
