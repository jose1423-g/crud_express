var express = require('express');

var router = express.Router();

const librosController = require('../controllers/librosController');

router.get('/', librosController.index)
//get view crear
router.get('/crear', librosController.crear)
//send form
router.post('/', librosController.save)

module.exports = router;