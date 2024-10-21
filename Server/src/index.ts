import express from "express";
import cors from "cors";
require("dotenv").config();
import { sequelize, connectToDb, rundb } from "./db/db_connection";
const corsOptions = {
  origin: (
    origin: string | undefined,
    callback: (err: Error | null, allow?: boolean) => void
  ) => {
    callback(null, true);
  },
};
const user_route = require("../src/routes/user_routes");
const app = express();
const PORT = process.env.SERVER_PORT;
app.use(cors(corsOptions));
app.use(express.json());
app.use(user_route);
app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Nodemon!");
});

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  await connectToDb();
});
