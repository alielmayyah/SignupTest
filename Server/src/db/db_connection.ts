import { Sequelize } from "@sequelize/core";
import { MySqlDialect } from "@sequelize/mysql";
import User from "../model/usermodel";
const sequelize = new Sequelize({
  dialect: MySqlDialect,
<<<<<<< HEAD
  database: "snablelkhir",
  user: "root",
  password: "mysql",
  host: "localhost",
  port: 3306,
=======
  database: process.env.MYSQL_DB_NAME,
  user: process.env.MYSQL_DB_USER,
  password: process.env.MYSQL_DB_PASS,
  host: process.env.MYSQL_DB_Host,
  port: Number(process.env.MYSQL_DB_PORT),
>>>>>>> b993c392d3af055d07ec3aeaf037d32289d98384
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
