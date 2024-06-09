'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comment_emoticons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  comment_emoticons.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'comment_emoticons',
  });
  return comment_emoticons;
};