var express = require('express');
var router = express.Router();
const usuariosController = require('../controllers/usuariosController')

/* GET users listing. */
router.get('/', usuariosController.index);

module.exports = router;
