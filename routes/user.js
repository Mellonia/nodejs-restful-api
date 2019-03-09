const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');

router.get('/', UserController.getUsers);

router.get('/:id', UserController.getUser);

router.delete('/:id', UserController.deleteUser);

router.post('/', UserController.addUser);

module.exports = router;