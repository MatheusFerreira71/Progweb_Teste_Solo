import mongoose from 'mongoose';
import Participante from './Participante'; // Importando o Participante para ser usado como um tipo de dado.
import Palestra from './Palestra'; // Importando o Participante para ser usado como um tipo de dado.

//Criação do modelo de dados.
const schema = mongoose.Schema({
    palestra: {
        type: Palestra, //Note que o tipo de dado é o próprio modelo da palestra.
        required: true
    },
    participate: {
        type: Participante, //Note que o tipo de dado é o próprio modelo do participante.
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
export default mongoose.model('Matricula', schema, 'matriculas');