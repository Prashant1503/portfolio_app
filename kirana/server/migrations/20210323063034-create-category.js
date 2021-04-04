'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Categories', {
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
            len : [6,25],
            notNull : {
              msg : "category name should be in [6-25] characters."
            }
          }
        }
      },
      slug: {
        type: Sequelize.STRING,
        unique : true,
        allowNull : false,
      },
      parentId: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Categories');
  }
};