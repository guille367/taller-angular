const UserDAO = require('../daos/userDAO')
const UserAssembler = require('../assemblers/userAssembler')
const jsonwebtoken = require('jsonwebtoken')
const secrets = require('../utils/secrets')
const Redis = require('../utils/redis')
const utils = require('../utils/utils')
const sha256 = utils.sha256

class UserService {

	static async login(username, requestPassword) {
		try {
			
			const user = await UserDAO.getByUsername(username)
			if (!user) {
				throw new Error('Invalid login data')
			}
			const { passwordHash } = sha256(requestPassword, user.salt)
			if (user.password !== passwordHash) {
				throw new Error('Invalid login data')
			}
			
			const { id, password, salt, ...jwtPayload } = UserAssembler.toDTO(user)
            const jwt = jsonwebtoken.sign({...jwtPayload}, secrets.jwt)
			Redis.set(username, {User: { ...jwtPayload }, jwt})
			return jwt

		} catch (err) {
			console.log(err)
			throw err
		}
	}

	static logout(username) {
		Redis.remove(username)
	}
}

module.exports = UserService