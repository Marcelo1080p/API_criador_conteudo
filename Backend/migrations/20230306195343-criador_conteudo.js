'use strict';

/** @type {import('sequelize-cli').Migration} */
const MeuModelo = sequelize.define('meu_modelo', {
  propriedade1: {
    type: DataTypes.STRING,
    allowNull: false
  },
  propriedade2: {
    type: DataTypes.STRING,
    allowNull: false
  },
  propriedade3: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

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
      redes: {
        type: MeuModelo

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
