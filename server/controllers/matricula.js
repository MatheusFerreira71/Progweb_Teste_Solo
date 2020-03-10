const Matricula = require('../models/Matricula');

module.exports = {
    novo: async (req, res) => {
        try {
            await Matricula.create(req.body); // Matricula é um modelo, logo podemos usar os métodos do mongoose.
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
            const lista = await Matricula.find();
            res.send(lista); // Enviamos a lista completa de matricula na resposta com o status implícito.
        } catch (erro) {
            console.log(erro);
            // HTTP 500: Internal Server Error
            res.status(500).send(erro);
        }
    },
    obterUm: async (req, res) => {
        try {
            const id = req.params.id;
            const matricula = await Matricula.findById(id); // Encontra a matricula pelo seu id e retorna um objeto.
            if (matricula) { // matricula foi encontrado.
                res.send(matricula); // Http 200 implícito.
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
            // Encontra uma matricula pelo id e retorna um objeto com ela atualizada. 
            // Esse método recebe um id e uma payload (carga de dados) contendo as alterações. 
            const matricula = await Matricula.findByIdAndUpdate(id, req.body);
            if (matricula) { //matricula encontrado e atualizado
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
            // Encontra a matricula pelo seu id e retorna o objeto encontrado que foi excluído.
            const matricula = await Matricula.findByIdAndDelete(id);
            if (matricula) { //matricula encontrado e excluída.
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