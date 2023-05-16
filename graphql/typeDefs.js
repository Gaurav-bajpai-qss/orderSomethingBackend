import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Post {
    id: ID
    title: String
    discription: String
  }
  type imgz {
    url: String
  }
  type Product {
    id: ID
    name: String
    price: String
    discription: String
    quantity: String
    image: [imgz]
    status: String
  }
  type Category {
    id: ID
    title: String
    img: String
  }
  type images {
    url: String
  }
  type Query {
    hello: String
    getAllPost: [Post]
    getAllCategory: [Category]
    showProduct: [Product]
  }
  input postInput {
    title: String
    discription: String
  }
  input catInput {
    title: String
    img: String
  }
  input img {
    url: String
  }
  input productInput {
    name: String
    price: String
    discription: String
    quantity: String
  }

  type Mutation {
    addPost(post: postInput): Post
    updatePost(id: String, post: postInput): Post
    deletePost(id: String): Post
    addCategory(cat: catInput): Category
    addProduct(p: productInput, img: [img]): Product
  }
`;

export default typeDefs;
