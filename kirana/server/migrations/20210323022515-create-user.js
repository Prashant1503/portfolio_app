'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull : false,
        validate : {
          min : {
            args : [6],
            msg : "First name should be minimum 6 characters long"
          },
          min : {
            args : [15],
            msg : "First name should be minimum 15 characters long"
          },

        }
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull : false,
        validate : {
          min : {
            args : [6],
            msg : "Last name should be minimum 6 characters long"
          },
          min : {
            args : [15],
            msg : "Last name should be minimum 15 characters long"
          },

        }
      },
      userName: {
        type: Sequelize.STRING,
        trim : true,
        unique : true,
        allowNull : false,
        validate : {
          args : {
            len : [6,25],
            msg : "Username should be of 6-25 characters long"
          }

        }
      },
      email: {
        type: Sequelize.STRING,
        allowNull : false,
        isLowercase : true,
        validate : {
          isEmail : true,
          notNull : {
            msg : "Email is required"
          }
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull : false,
        validate : {
          args : {
            len : [6,25],
            msg : "Password should be between [6-25] characters long"
          }
        }

      },
      role: {
        type: Sequelize.STRING,
        enum : ['user','admin','retailer'],
        default : "user"
      },
      contactNumber: {
        type: Sequelize.BIGINT,
        validate : {
          args : {
            len : [10,10],
            msg : "Contact number should be of 10 digits"
          }
        }
      },
      profilePicture: {
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
    await queryInterface.dropTable('Users');
  }
};