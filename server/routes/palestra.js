const express = require('express');
const controllerPale = require('../controllers/palestra');

const router = express.Router(); // Importação do router do express.

router.get('/', controllerPale.listar);
router.get('/:id', controllerPale.obterUm);
router.post('/', controllerPale.novo);
router.put('/', controllerPale.atualizar);
router.delete('/', controllerPale.excluir);

module.exports = router;