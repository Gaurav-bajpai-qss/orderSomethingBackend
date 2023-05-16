import express from "express";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./graphql/typeDefs.js";
import resolver from "./graphql/resolver.js";
import DatabaseConnection from "./config/Database.js";
import cors from "cors";
import morgan from "morgan";

const port = 500;
const app = express();
DatabaseConnection;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
const startServer = async () => {
  const apolloServer = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolver,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app });
  app.listen(port, () => {
    console.log(`Server is running on port no ${port}`);
  });
};

startServer();
