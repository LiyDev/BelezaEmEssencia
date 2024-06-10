const express = require('express');
const router = express.Router();
const Cliente = require('../models/cliente');


router.get("/", (req, res)=>{
    Cliente.findAll({order:[
        ['nome', 'ASC']
    ]})
    .then(clientes =>{
        res.render('clientes', {
            clientes
        });
    }); 
});

router.get("/editar/:id", (req, res) => Cliente.findOne({
    where: {id_cliente: req.params.id}
}).then(produtos =>{
    res.render('editarclientes', {
        produtos
    });
}).catch(err => console.log(err)));

router.get("/add", (req, res)=>{
    res.render('addcliente');
});

router.post('/add', (req, res) => {
    let {nome, data_nascimento, email, telefone, endereco} = req.body;

    Cliente.create({
        nome,
        data_nascimento,
        email,
        telefone,
        endereco
    })
    .then(() => res.redirect('/clientes'))
    .catch(err => console.log(err));
});

router.post('/edit/', (req, res) => {
    let {nome, data_nascimento, email, telefone, endereco} = req.body;
    
    let dados = {nome, data_nascimento, email, telefone, endereco}; 

    Produto.update(dados, {where: {id_cliente: id}})
    .then(() =>{
        res.redirect('/clientes');
    })
    .catch(err => {console.log(err)});
});

router.get('/delete/:id', (req, res) =>{
    const id = req.params.id;
    Cliente.destroy({where: {id_cliente: id}})
    .then(() =>{
        res.redirect('/clientes');
    })
    .catch(err => {console.log(err)});;
});

module.exports = router;