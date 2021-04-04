'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Products.init({
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    price: DataTypes.BIGINT,
    description: DataTypes.STRING,
    offer: DataTypes.INTEGER,
    productPictures: DataTypes.STRING,
    reviews: DataTypes.STRING,
    quantity : DataTypes.INTEGER,
    category : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};