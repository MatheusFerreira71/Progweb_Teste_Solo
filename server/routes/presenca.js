const express = require('express');
const controllerPre = require('../controllers/presenca');

const router = express.Router(); // Importação do router do express.

router.get('/', controllerPre.listar);
router.get('/:id', controllerPre.obterUm);
router.post('/', controllerPre.novo);
router.put('/', controllerPre.atualizar);
router.delete('/', controllerPre.excluir);

module.exports = router;