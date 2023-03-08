'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("criador_conteudos", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },

      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },

      tipoDev: {
        type: Sequelize.STRING,
        allowNull: false
      },

      imgLink: {
        type: Sequelize.STRING,
        allowNull: false
      },

      insta: {
        type: Sequelize.STRING,
        allowNull: false
      },

      youTube: {
        type: Sequelize.STRING,
        allowNull: false
      },

      createdAt: {
        type: Sequelize.DATE,
      },
  
      updatedAt: {
        type: Sequelize.DATE,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("criador_conteudos")
  }
};
