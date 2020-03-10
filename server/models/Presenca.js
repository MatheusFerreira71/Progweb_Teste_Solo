//Esse modelo de dados representa a presença do participante no dia, como não iremos cadastrar os dias que os
// eventos vão acontecer, apenas o participante estar nessa tabela contará como presença para ele.

const mongoose = require('mongoose');

//Criação do modelo de dados.
const schema = mongoose.Schema({
    data: {
        type: Date,
        required: true
    },
    participante: {
        type: String, 
        required: true
    }
});

// 1° parametro: Nome do modelo
// 2° parametro: Esquema do modelo 
// 3° parametro: Nome da coleção => em que os objetos criados a partir do modelo serão armazenados no MongoDB

// Exportação do modelo de dados.
module.exports = mongoose.model('Presenca', schema, 'presencas');