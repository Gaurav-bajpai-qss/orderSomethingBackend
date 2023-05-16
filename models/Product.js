import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: String,
    discription: String,
    price: Number,
    quantity: Number,
    image: Array,
    status: {
      type: String,
      default: "Available",
    },
    review: Array,
  },
  { timestamps: true }
);

export const product = mongoose.model("Product", productSchema);
