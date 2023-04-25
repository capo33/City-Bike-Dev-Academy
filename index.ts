import "dotenv/config";
import app from "./app";
import { connectToMongoDB } from "./config/db";

// Connect to MongoDB
connectToMongoDB();

// Set port
const port = process.env.PORT || 3000;

// Start server
try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  if (error instanceof Error) {
    console.log(`Error occured: (${error.message})`);
  }
}
