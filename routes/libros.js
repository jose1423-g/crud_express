var express = require('express');

var router = express.Router();

const librosController = require('../controllers/librosController');

router.get('/', librosController.index)
//get view crear
router.get('/crear', librosController.crear)
//send form
router.post('/', librosController.save)

router.post('/eliminar/:id', librosController.delete)
router.post('/editar/:id', librosController.editar)

router.post('/actualizar', librosController.actuaizar)




module.exports = router;