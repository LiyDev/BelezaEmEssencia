const express = require('express');
const router = express.Router();

//buscando todos os alunos
router.get("/", (req, res)=>{

    res.render('vendas');
     
});

router.get("/add", (req, res)=>{

    res.render('addvenda');
     
});

module.exports = router;