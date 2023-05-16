import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    title: String,
    img: String,
  },
  { timestamps: true }
);

export const Category = mongoose.model("Category", CategorySchema);
