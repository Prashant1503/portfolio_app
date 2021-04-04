'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        trim : true,
        unique : true,
        allowNull : false,
        validate : {
          args : {
            len : [6,255],
            notNull : {msg : "Product name should be between [6-255] characters only"}
          }
        }
      },
      slug: {
        type: Sequelize.STRING,
        allowNull : false,
        unique : true
      },
      price: {
        type: Sequelize.BIGINT,
        allowNull : false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull : false,
        validate : {
          args : {
            len : [6,255],
            msg : "Description should be between [6-255] characters."
          }
        }

      },
      offer: {
        type: Sequelize.INTEGER
      },
      productPictures: {
        type: Sequelize.STRING,

      },
      reviews: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};