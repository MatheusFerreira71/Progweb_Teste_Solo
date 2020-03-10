import mongoose from 'mongoose';

//Criação do modelo de dados.
const schema = mongoose.Schema({
    descricao: {
        type: String,
        required: true
    },
    data_hora: {
        type: Date,
        required: true,
    },
    max_participantes: {
        type: Number,
        required: true
    }
});

// 1° parametro: Nome do modelo
// 2° parametro: Esquema do modelo 
// 3° parametro: Nome da coleção => em que os objetos criados a partir do modelo serão armazenados no MongoDB

// Exportação do modelo de dados.
export default mongoose.model('Palestra', schema, 'palestras');