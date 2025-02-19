import mongoose from "mongoose";

const connectToMongoDb = async () => {
  try {
    console.log("Trying to connect to MongoDb...")
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to MongoDb");
  } catch (error) {
    console.log("Error connecting to MongoDb", error.message);
  }
};

export default connectToMongoDb;
