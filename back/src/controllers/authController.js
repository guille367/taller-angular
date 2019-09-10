const GenericController = require('./genericController')
const AuthService = require('../services/authService')

class AuthController extends GenericController{

	static login(req, res, next) {
        const requestUsername = req.body.username
        const requestPassword = req.body.password
        AuthController.resolve(next, AuthService.login(requestUsername, requestPassword), jwt => {
            res.status(200).send({
                data: jwt,
            })
        })
    }

	static logout(req, res, next) {
        const username = req.token.username
        AuthService.logout(username)
        res.send({
            data: 'ok'
        })
    }

}

module.exports = AuthController