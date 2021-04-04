"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Addresses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate : {
          args : {
            len : [6,255],
            msg : "Address should be atleast 6-255 character"
          }
        }
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      zipcode: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "zip_code",
        validate : {
          args : {
            len : [6],
            msg : "Zip code should be of 6 character"
          }
        }

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Addresses");
  },
};
