import mongoose from "mongoose";

const schema = mongoose.Schema({
  titiel: String,
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },

  price: Number,
  publish_date: String,
});

const BookModel = mongoose.models.book || mongoose.model("book", schema);
export default BookModel;
