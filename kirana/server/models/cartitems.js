'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartItems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  };
  CartItems.init({
    product: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'CartItems',
  });
  return CartItems;
};