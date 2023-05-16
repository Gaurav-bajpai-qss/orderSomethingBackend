import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} from "graphql";

export const imageType = new GraphQLObjectType({
  name: "img",
  fields: {
    url: GraphQLString,
  },
});

export const productType = new GraphQLObjectType({
  name: "Products",
  description: "Shopping Cart GraphQL Object Schema Model",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    price: { type: GraphQLInt },
    discription: { type: GraphQLString },
    quantity: { type: GraphQLInt },
    image: { type: new GraphQLList(imageType) },
  },
});
