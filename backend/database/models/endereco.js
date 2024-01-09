'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Endereco extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Endereco.init({
    nickName: DataTypes.STRING,
    road: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Endereco',
  });
  return Endereco;
};