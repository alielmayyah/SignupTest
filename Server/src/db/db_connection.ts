import { Sequelize } from "@sequelize/core";
import { MySqlDialect } from "@sequelize/mysql";
import User from "../model/usermodel";
const sequelize = new Sequelize({
  dialect: MySqlDialect,
  database: "snablelkhir",
  user: "root",
  password: "1234",
  host: "localhost",
  port: 3306,
});
const connectToDb = async () => {
  try {
    rundb();
    await sequelize.authenticate();
    console.log("Successfully connected to our db");
  } catch (error) {
    console.log(error);
  }
};
const rundb = async () => {
  User.initModel(sequelize);

  try {
    await sequelize.sync({ force: false });
    console.log("Database & users table created/updated!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export { sequelize, connectToDb, rundb };
