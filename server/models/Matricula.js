const mongoose = require('mongoose');

//Criação do modelo de dados.
const schema = mongoose.Schema({
    palestra: {
        type: String, 
        required: true
    },
    participante: {
        type: String, 
        required: true
    },
    presenca: {
        type: Boolean,
        required: false
    } // Note que esse caso de presença é diferente pois ele precisa dessa tabela para vincular as tabelas
    // de participante e palestra, por isso precisamos do campo presença, pois o participante pode estar 
    // cadastrado em uma paletra porém faltar.
});

// 1° parametro: Nome do modelo
// 2° parametro: Esquema do modelo 
// 3° parametro: Nome da coleção => em que os objetos criados a partir do modelo serão armazenados no MongoDB

// Exportação do modelo de dados.
module.exports = mongoose.model('Matricula', schema, 'matriculas');