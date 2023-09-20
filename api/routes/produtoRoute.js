const { Router } = require('express')
const ProdutoController = require('../controllers/produtoController')
const roles = require('../middleware/roles')
const permissoes = require('../middleware/permissoes')
const router = Router()
router
  .post('/produto', ProdutoController.cadastrarProduto)
  .get('/produto', ProdutoController.buscarTodosProdutos)
  .get('/produto/id/:id', ProdutoController.buscarProdutoPorId)
  .delete('/produto/id/:id', ProdutoController.deletarProdutoPorId)
  .put('/produto/id/:id', ProdutoController.editarProduto)
module.exports = router