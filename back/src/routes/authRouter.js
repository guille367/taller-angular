const express = require('express')
const AuthMiddleware = require('../middlewares/authMiddleware')
const AuthController = require('../controllers/authController')

const api = express.Router();

api.post('/login', AuthController.login)
api.post('/logout', AuthMiddleware.isAuth, AuthController.logout)

module.exports = api;