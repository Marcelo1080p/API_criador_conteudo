const Criador = require("../models/Criador");

module.exports=  {
    async store(req, res) {
        const { nome, imgLink, insta, youTube } = req.body;
        const criador = await Criador.create( { nome, imgLink, insta, youTube});
        return res.json(criador);
    },

    async index( req, res ) {
        const criador = await Criador.findAll();
        return res.json(criador)
    }
}