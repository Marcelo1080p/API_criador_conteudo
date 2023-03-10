const Criador = require("../models/Criador");

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
    }
}