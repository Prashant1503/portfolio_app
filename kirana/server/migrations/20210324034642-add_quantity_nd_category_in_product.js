'use strict';



module.exports = {
  up: async (queryInterface, Sequelize) => {

    return Promise.all([
      
      queryInterface.addColumn('Products','slug',{

        type : Sequelize.STRING,
        allowNull : false,
        
      }),
     queryInterface.addColumn('Products','quantity',{

       type : Sequelize.INTEGER,
       allowNull : false,
       
     }),

     queryInterface.addColumn('Products','category',{
       type : Sequelize.STRING,
       allowNull : false,
       refrences : {
        model: 'Categories',
        key: 'id',
    
     },
     })
    ])
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    
  
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
