import path from "path";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/messages.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDb from "./db/connectToMongoDb.js";

// Importing Socket server
import { app, server } from "./socket/socket.js";

dotenv.config();

// deleting because of socket.io
// const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json()); //to parse the incomming requests with JSON payloads from (req.body)
app.use(cookieParser());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.send(path.join(__dirname, "/frontend/dist/index.html"));
});


server.listen(PORT, () => {
  connectToMongoDb();
  console.log(`server running on port ${PORT}`);
});
