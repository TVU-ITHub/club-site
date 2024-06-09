'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class small_team_projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  small_team_projects.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'small_team_projects',
  });
  return small_team_projects;
};