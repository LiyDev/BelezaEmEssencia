const express = require('express');
const router = express.Router();

//buscando todos os alunos
router.get("/sobre", (req, res)=>{

    res.render('sobre');
     
});

module.exports = router;