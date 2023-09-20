const {Router} = require('express')
const UsuarioController = require('../controllers/usuarioController')
const autenticado = require('../middleware/autenticado')

const router = Router()

router.use(autenticado)

router
    .post('/usuarios', UsuarioController.cadastrar)  
    .get('/usuarios',UsuarioController.buscarTodosUsuario)   
    .get('/usuarios/:id', UsuarioController.buscarUsuarioPorId)    
    .put('/usuarios/:id',UsuarioController.editarUsuario)    
    .delete('/usuarios/:id',UsuarioController.deletarUsuario)  


module.exports = router