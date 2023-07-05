var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Inicio', h1: 'Bienvenido'});   
})

module.exports = router;
