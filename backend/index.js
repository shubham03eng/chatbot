import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import chatBotRoutes from "./routes/chatbot.routes.js";
const app = express();
const port = 4002;

dotenv.config();
const PORT = process.env.PORT || 3000;

// database connection code
mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });


  // define routes
  app.use("/bot/v1",chatBotRoutes);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
