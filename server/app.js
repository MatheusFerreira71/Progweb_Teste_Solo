var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//importação das rotas.
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const routerPale = require('./routes/palestra');
const routerPar = require('./routes/participante');
const routerPre = require('./routes/presenca');
const routerM = require('./routes/matricula');

var app = express();

// Importamos o código do módulo database e usamos a função connection para conectar ao banco de dados.
const database = require('./config/database');
database('mongodb://localhost:27017/Techweek');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Inicialização das rotas.
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/palestra', routerPale);
app.use('/participante', routerPar);
app.use('/presenca', routerPre);
app.use('/matricula', routerM);

module.exports = app;
