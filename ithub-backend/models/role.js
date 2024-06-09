"use strict";
const { Model } = require("sequelize");
const db = require(".");
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.User, {
        foreignKey: "roleId",
        as: "users",
      });
    }
  }
  Role.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Role name is required",
          },
        },
      },
      permissionDetails: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: {},
      },
    },
    {
      sequelize,
      modelName: "Role",
    }
  );

  return Role;
};
