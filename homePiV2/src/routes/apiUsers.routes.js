const express = require('express');
const router = express.Router();

// api para criação de usuário
const UserCreateApi = require('../database/seeders/UserCreateApi');

router.get('/users/api', UserCreateApi.listar);
router.get('/users/api/:id', UserCreateApi.detalhar);
router.post('/users/api', UserCreateApi.criar);
router.delete('/users/api/:id', UserCreateApi.excluir);


module.exports = router;