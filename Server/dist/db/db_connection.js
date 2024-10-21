"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@sequelize/core");
const mysql_1 = require("@sequelize/mysql");
const sequelize = new core_1.Sequelize({
  dialect: mysql_1.MySqlDialect,
  database: "snablelkhir",
  user: "root",
  password: "mysql",
  host: "localhost",
  // host: "127.0.0.1",
  port: 3306,
});
exports.default = sequelize;
