const { DataTypes } = require("sequelize");
const sequelize = require("../config/Sequelize");


const Criador = sequelize.define("criador_conteudos", {
    nome: DataTypes.STRING,
    tipoDev: DataTypes.STRING,
    imgLink: DataTypes.STRING,
    insta: DataTypes.STRING,
    youTube: DataTypes.STRING

});

module.exports = Criador;