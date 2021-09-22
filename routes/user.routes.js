const router = require('express').Router();
const { rutaPost, rutaPut } = require('../controllers/user.controllers.js');
const Categoria= require('../models/categoria')
const { body } = require('express-validator');

const { validarCampos } = require('../helpers/validacionCampos.js');
const { siExistecategoria } = require('../middlewares/validaciones');

// Ruta para crear un nuevo usuario
router.post('/create-product', 

body('nombre', 'El nombre ingresado no contiene un formato correcto')
.not()
.isEmpty(),


body('precio', ' el precio ingresado debe contener numeros y no estar vacio')
.not()
.isEmpty()
.isNumeric(),

body('categoria', 'la categoria seleccionada no es válida')
.not()
.isEmpty()
.custom(siExistecategoria),

validarCampos

,rutaPost)

// Ruta para editar un usuario
router.put('/edit-user/:id', 
body('username', 'El email ingresado no contiene un formato correcto').isEmail(),
body('password', 'La contraseña debe contener al menos 8 caracteres').isLength({ min: 8}),
body('role', 'El rol seleccionado no es válido').isIn(['admin_user', 'common_user']),
body('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,rutaPut)

module.exports = router;