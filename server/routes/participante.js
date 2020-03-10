const express = require('express');
const controllerPar = require('../controllers/participante');

const router = express.Router(); // Importação do router do express.

router.get('/', controllerPar.listar);
router.get('/:id', controllerPar.obterUm);
router.post('/', controllerPar.novo);
router.put('/', controllerPar.atualizar);
router.delete('/', controllerPar.excluir);

module.exports = router;