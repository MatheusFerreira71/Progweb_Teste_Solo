import mongoose from 'mongoose';

export default {
    connection: uri => {
        // Método de conexão com o banco, passando algumas opções de configuração dentro de um objeto.
        mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        // Eventos para liberar algumas mensagens ao conectar e perder a conexão com o banco de dados.
        mongoose.connection.on('connected', () => console.log(`Mongoose! conectado a ${uri}`));
        mongoose.connection.on('disconnected', () => console.log(`Mongoose! disconectado de ${uri}`));
        mongoose.connection.on('error', erro => console.log(`Mongoose! disconectado de ${uri} com o erro: ${erro}`));
        process.on('SIGINT', () => {
            console.log(`Mongoose! desconectado pelo termino da aplicação`);
            process.exit(0) // o é a saída sem erros!
        });
    }
}