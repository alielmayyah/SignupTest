import { Request, Response } from "express";
import userdata from "../model/usermodel";
const jwt = require("jsonwebtoken");

const JWT_SECRET =
  "4162d909646608c545e3cd92ddc47b3756b3bfe3e1983339feab7fe69221f244";

const create_user = async (req: Request, res: Response) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const new_data = await userdata.create({
      email: email,
      password: password,
    });
    const token = jwt.sign(
      { id: new_data.id, email: new_data.email, role: new_data.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    new_data.token = token;
    await new_data.save();
    return res.json({ user: new_data, token });
  } catch (error) {
    res.status(500).json({ status: 500, data: "the account is used before" });
  }
};
const login = async (req: Request, res: Response) => {
  const email = req.body.email;
  const password = req.body.password;
  const account = await userdata.findOne({
    where: { email: email },
  });
  if (account) {
    if (account.password == password) {
      res.status(200).json({ status: 200, data: account });
    } else {
      res.status(401).json({ status: 401, data: "the password is incorrect " });
    }
  } else {
    res.status(401).json({ status: 401, data: "the account is incorrect " });
  }
};
module.exports = { create_user, login };
