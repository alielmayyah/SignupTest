import {
  Sequelize,
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "@sequelize/core";

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<number>;
  declare First_name: CreationOptional<string>;
  declare Last_name: CreationOptional<string>;
  declare age: CreationOptional<number>;
  declare email: string;
  declare role: CreationOptional<string>;
  declare password: string;
  declare token: CreationOptional<string>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  static initModel(sequelize: Sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        First_name: {
          type: DataTypes.STRING,
          allowNull: true, // Ensure first name is not null
        },
        Last_name: {
          type: DataTypes.STRING,
          allowNull: true, // Ensure last name is not null
        },
        age: {
          type: DataTypes.INTEGER,
          allowNull: true, // Ensure age is not null
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true, // Ensure email is not null
          validate: {
            isEmail: true,
            // Validate that the email is in a valid format
          },
        },
        role: {
          type: DataTypes.STRING,
          allowNull: true, // Ensure role is not null
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false, // Ensure password is not null
        },
        token: {
          type: DataTypes.STRING,
          allowNull: true, // Allow null because token is not set initially
        },
        createdAt: {
          type: DataTypes.DATE(6),
          allowNull: false,
          defaultValue: DataTypes.NOW, // Automatically set the current date/time
        },
        updatedAt: {
          type: DataTypes.DATE(6),
          allowNull: false,
          defaultValue: DataTypes.NOW, // Automatically set the current date/time
        },
      },
      {
        sequelize,
        modelName: "User",
        timestamps: true, // Use automatic timestamps
      }
    );
  }
}
export default User;
