const Palestra = require('../models/Palestra');

module.exports = {
    novo: async (req, res) => {
        try {
            await Palestra.create(req.body); // Palestra é um modelo, logo podemos usar os métodos do mongoose.
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
            const lista = await Palestra.find();
            res.send(lista); // Enviamos a lista completa de palestra na resposta com o status implícito.
        } catch (erro) {
            console.log(erro);
            // HTTP 500: Internal Server Error
            res.status(500).send(erro);
        }
    },
    obterUm: async (req, res) => {
        try {
            const id = req.params.id;
            const palestra = await Palestra.findById(id); // Encontra a palestra pelo seu id e retorna um objeto.
            if (palestra) { // palestra foi encontrado.
                res.send(palestra); // Http 200 implícito.
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
            // Encontra uma palestra pelo id e retorna um objeto com ela atualizada. 
            // Esse método recebe um id e uma payload (carga de dados) contendo as alterações. 
            const palestra = await Palestra.findByIdAndUpdate(id, req.body);
            if (palestra) { //palestra encontrado e atualizado
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
            // Encontra a palestra pelo seu id e retorna o objeto encontrado que foi excluído.
            const palestra = await Palestra.findByIdAndDelete(id);
            if (palestra) { //palestra encontrado e excluída.
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