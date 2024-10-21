import express from "express";
import { sequelize, connectToDb, rundb } from "./db/db_connection";
import User from "./model/usermodel"; // Import the User model
const user_route = require("../src/routes/user_routes");
const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(user_route);
app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Nodemon!");
});

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  await connectToDb();
});
