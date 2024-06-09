"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Role, {
        foreignKey: "roleId",
        as: "role",
      });
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "First name is required",
          },
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fullName: {
        type: DataTypes.VIRTUAL,
        get() {
          return `${this.lastName} ${this.firstName}`;
        },
        set(value) {
          throw new Error("Do not try to set the `fullName` value!");
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Password is required",
          },
        },
      },
      roleId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "User",
      timestamps: true,
      hooks: {
        beforeCreate: async (user) => {
          if (user.password) {
            const salt = await bcrypt.genSalt(12); // Tạo salt với độ phức tạp là 12
            user.password = await bcrypt.hash(user.password, salt); // Mã hóa mật khẩu
          }
        },
        beforeUpdate: async (user) => {
          if (user.password) {
            const salt = await bcrypt.genSalt(12); // Tạo salt với độ phức tạp là 12
            user.password = await bcrypt.hash(user.password, salt); // Mã hóa mật khẩu
          }
        },
      },
    }
  );
  return User;
};
