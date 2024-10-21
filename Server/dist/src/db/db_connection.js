"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.rundb = exports.connectToDb = exports.sequelize = void 0;
const core_1 = require("@sequelize/core");
const mysql_1 = require("@sequelize/mysql");
const usermodel_1 = require("../model/usermodel");
const sequelize = new core_1.Sequelize({
  dialect: mysql_1.MySqlDialect,
  database: "snablelkhir",
  user: "root",
  password: "mysql",
  host: "localhost",
  port: 3306,
});
exports.sequelize = sequelize;
const connectToDb = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      rundb();
      yield sequelize.authenticate();
      console.log("Successfully connected to our db");
    } catch (error) {
      console.log(error);
    }
  });
exports.connectToDb = connectToDb;
const rundb = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    usermodel_1.User.initModel(sequelize);
    try {
      yield sequelize.sync({ force: false });
      console.log("Database & users table created/updated!");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  });
exports.rundb = rundb;
