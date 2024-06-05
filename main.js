const express = require('express');
const {engine} = require('express-handlebars');
const bodyParser = require('body-parser');
    const db = require('./db/connection');

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const PORT = 3000;

app.listen(PORT, function(){
    console.log(`Servidor rodando em: http://localhost/${PORT}`);
});

db
    .authenticate()
    .then(()=>{
        console.log('Banco conectado');
    })
    .catch(err => {
        console.log('Erro ao conectar', err);
    });

app.use('/', require('./routes/teste.js'));