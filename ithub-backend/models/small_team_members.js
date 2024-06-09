'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class small_team_members extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  small_team_members.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'small_team_members',
  });
  return small_team_members;
};