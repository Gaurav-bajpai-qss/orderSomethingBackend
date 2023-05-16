import { Category } from "../models/Category.js";
import { Post } from "../models/Post.js";
import { product } from "../models/Product.js";

const resolver = {
  Query: {
    hello: () => {
      return "hello Gaurav";
    },
    getAllPost: async () => {
      const data = await Post.find();
      return data;
    },
    getAllCategory: async () => {
      const data = await Category.find();
      return data;
    },
    showProduct: async () => {
      const data = await product.find();
      return data;
    },
  },
  Mutation: {
    addPost: async (parent, args) => {
      const { title, discription } = args.post;
      const post = await Post.create({ title, discription });
      return post;
    },
    updatePost: async (parent, args) => {
      const { id } = args;
      const { title, discription } = args.post;
      const post = await Post.findByIdAndUpdate(
        { _id: id },
        { title: title, discription: discription }
      );
      return post;
    },
    deletePost: async (parent, args) => {
      const { id } = args;
      const post = await Post.findByIdAndDelete({ _id: id });
      return { msg: "Post Delete Successfully :)" };
    },
    addCategory: async (parent, args) => {
      const { title, img } = args.cat;
      const cat = await Category.create({ title, img });
      return cat;
    },
    addProduct: async (parent, args) => {
      const { name, discription, price, quantity } = args.p;
      console.log(args.img);
      const products = await product.create({
        name,
        discription,
        price,
        quantity,
        image: args.img,
      });
      return products;
    },
  },
};

export default resolver;
