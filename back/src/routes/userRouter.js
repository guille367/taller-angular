const express = require('express')
const UserMiddleware = require('../middlewares/userMiddleware')
const UserController = require('../controllers/userController');

const api = express.Router();

api.get('/:id', UserController.getUserById);
api.get('', UserController.getUsers);
api.post('', 
	...UserMiddleware.createUserValidations(),
	UserMiddleware.hashPassword,
	UserController.createUser);
api.put('/:id', UserController.updateUser);
api.delete('/:id', UserController.deleteUser);
api.post('/login', UserController.auth)
module.exports = api;