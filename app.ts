import express, { Application, Request, Response } from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import bikeRoutes from "./routes/Bike.Routes";

// Load env vars
dotenv.config();

// Initialize express
const app: Application = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Welcome route
app.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.json({
    message: "Welcome to the MongoDB API",
    author: "Mohamed Capo",
    version: "1.0.0",
  });
});

// Routes
app.use("/api/v1/bikes", bikeRoutes);

export default app;
