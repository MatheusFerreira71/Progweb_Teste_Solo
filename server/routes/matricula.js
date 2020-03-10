const express = require('express');
const controllerM = require('../controllers/matricula');

const router = express.Router(); // Importação do router do express.

router.get('/', controllerM.listar);
router.get('/:id', controllerM.obterUm);
router.post('/', controllerM.novo);
router.put('/', controllerM.atualizar);
router.delete('/', controllerM.excluir);

module.exports = router;