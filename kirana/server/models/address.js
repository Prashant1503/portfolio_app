"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Address.belongsTo(models.User, {
        onDelete: "cascade",
        foreignKey: "userId",
      });
    }
  }
  Address.init(
    {
      userId: DataTypes.INTEGER,
      city: DataTypes.STRING,
      address: DataTypes.STRING,
      country: DataTypes.STRING,
      zipcode: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Address",
    }
  );
  return Address;
};
