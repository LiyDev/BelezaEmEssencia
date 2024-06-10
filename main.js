const express = require('express');
const {engine} = require('express-handlebars');
const bodyParser = require('body-parser');
const db = require('./db/connection');
const chalk = require('chalk');

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const PORT = 3000;

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
    console.log(`Servidor rodando em: ` + chalk.blueBright(`http://localhost:${PORT}`));
});

db
    .authenticate()
    .then(()=>{
        console.log(chalk.cyanBright("Conectado ao banco de dados."));
    })
    .catch(err => {
        console.log(chalk.redBright('Erro ao conectar'), err);
    });

app.use('/contato', require('./routes/contato.js'));
app.use('/', require('./routes/index.js'));
app.use('/produtos', require('./routes/produtos.js'));
app.use('/sobre', require('./routes/sobre.js'));
app.use('/clientes', require('./routes/cliente.js'));
app.use('/vendas', require('./routes/vendas.js'));