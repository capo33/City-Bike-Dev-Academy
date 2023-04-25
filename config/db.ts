import mongoose from "mongoose";

import env from "../utils/validateEnv";

export const connectToMongoDB = async () => {
  try {
    await mongoose.connect(env.MONGODB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
