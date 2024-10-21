import { Sequelize } from "@sequelize/core";
import { MySqlDialect } from "@sequelize/mysql";
import User from "../model/usermodel";
const sequelize = new Sequelize({
  dialect: MySqlDialect,
  database: process.env.MYSQL_DB_NAME,
  user: process.env.MYSQL_DB_USER,
  password: process.env.MYSQL_DB_PASS,
  host: process.env.MYSQL_DB_Host,
  port: Number(process.env.MYSQL_DB_PORT),
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