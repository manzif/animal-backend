'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Animal.init(
    {
      type: DataTypes.STRING,
      properties: DataTypes.JSON,
      geometry: DataTypes.ARRAY(DataTypes.STRING),
    },
    {
      sequelize,
      modelName: 'Animal',
    }
  )
  return Animal
}
