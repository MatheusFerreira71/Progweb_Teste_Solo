const Participante = require('../models/Participante');

module.exports = {
    novo: async (req, res) => {
        try {
            await Participante.create(req.body); // participante é um modelo, logo podemos usar os métodos do mongoose.
            // HTTP Status 201: Created
            res.sendStatus(201);
        }
        catch (erro) {
            console.log(erro);
            // HTTP 500: Internal Server Error
            res.status(500).send(erro);
        }
    },
    listar: async (req, res) => {
        try {
            // find(), sem parâmetros, retorna todos.
            const lista = await Participante.find();
            res.send(lista); // Enviamos a lista completa de participante na resposta com o status implícito.
        } catch (erro) {
            console.log(erro);
            // HTTP 500: Internal Server Error
            res.status(500).send(erro);
        }
    },
    obterUm: async (req, res) => {
        try {
            const id = req.params.id;
            const participante = await Participante.findById(id); // Encontra a participante pelo seu id e retorna um objeto.
            if (participante) { // participante foi encontrado.
                res.send(participante); // Http 200 implícito.
            } else {
                //Http 404: Not found.
                res.status(404).end();
            }
        } catch (erro) {
            console.log(erro);
            // HTTP 500: Internal Server Error
            res.status(500).send(erro);
        }
    },
    atualizar: async (req, res) => {
        try {
            const id = req.body._id;
            // Encontra uma participante pelo id e retorna um objeto com ela atualizada. 
            // Esse método recebe um id e uma payload (carga de dados) contendo as alterações. 
            const participante = await Participante.findByIdAndUpdate(id, req.body);
            if (participante) { //participante encontrado e atualizado
                res.status(204).end();// HTTP 204: No content
            } else {
                res.status(404).end();
            }
        } catch (erro) {
            console.log(erro);
            // HTTP 500: Internal Server Error
            res.status(500).send(erro);
        }
    },
    excluir: async (req, res) => {
        try {
            const id = req.body._id;
            // Encontra a participante pelo seu id e retorna o objeto encontrado que foi excluído.
            const participante = await Participante.findByIdAndDelete(id);
            if (participante) { //participante encontrado e excluída.
                res.status(204).end();// HTTP 204: No content
            } else {
                res.status(404).end();
            }
        } catch (erro) {
            console.log(erro);
            // HTTP 500: Internal Server Error
            res.status(500).send(erro);
        }
    }
}