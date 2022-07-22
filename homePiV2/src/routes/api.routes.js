const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiProduct');

router.get('/api', apiController.listar);
router.get('/api/:id', apiController.detalhar);
router.post('/api', apiController.criar);
router.delete('/api/:id', apiController.excluir);
router.put('/api/:id', apiController.alterar);

module.exports = router;