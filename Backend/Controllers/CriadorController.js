const Criador = require("../models/Criador");
const { Op } = require('sequelize');


module.exports=  {
    async store(req, res) {
        const { nome, tipoDev, imgLink, insta, youTube } = req.body;
        const criador = await Criador.create( { nome, tipoDev, imgLink, insta, youTube});
        return res.json(criador);
    },

    async index( req, res ) {
        const criador = await Criador.findAll({
            order: [
                ['id', 'ASC']
            ]
        });
        return res.json(criador)
    },

    async findByName(req, res) {
        const { nome } = req.params;
        
        const criador = await Criador.findAll({
            where: {
                nome: {
                    [Op.iRegexp]: `${nome}`
                }
            }
        });
        return res.json(criador); 
    }
}