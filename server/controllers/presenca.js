const Presenca = require('../models/Presenca');
const Participante = require('../models/Participante');

module.exports = {
    novo: async (req, res) => {
        try {
            await Presenca.create(req.body); // Presenca é um modelo, logo podemos usar os métodos do mongoose.
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
            const lista = await Presenca.find();
            for (const presenca of lista) {
                presenca.participante = await Participante.findById(presenca.participante._id);
            };
            res.send(lista); // Enviamos a lista completa de presenca na resposta com o status implícito.
        } catch (erro) {
            console.log(erro);
            // HTTP 500: Internal Server Error
            res.status(500).send(erro);
        }
    },
    obterUm: async (req, res) => {
        try {
            const id = req.params.id;
            const presenca = await Presenca.findById(id); // Encontra a presenca pelo seu id e retorna um objeto.
            if (presenca) { // presenca foi encontrado.
                presenca.participante = await Participante.findById(presenca.participante._id);
                res.send(presenca); // Http 200 implícito.
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
            // Encontra uma presenca pelo id e retorna um objeto com ela atualizada. 
            // Esse método recebe um id e uma payload (carga de dados) contendo as alterações. 
            const presenca = await Presenca.findByIdAndUpdate(id, req.body);
            if (presenca) { //presenca encontrado e atualizado
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
            // Encontra a presenca pelo seu id e retorna o objeto encontrado que foi excluído.
            const presenca = await Presenca.findByIdAndDelete(id);
            if (presenca) { //presenca encontrado e excluída.
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