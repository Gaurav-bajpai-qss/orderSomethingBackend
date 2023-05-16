import mongoose from "mongoose";

const DatabaseConnection = mongoose
  .connect(
    "mongodb+srv://gouravbajpai:gouravbajpai@cluster0.brtvxd1.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((res) => {
    console.log("Database Connected Successfully :)");
  })
  .catch((err) => {
    console.log(err);
  });

export default DatabaseConnection;
