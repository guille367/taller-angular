const UserDAO = require('../daos/userDAO')
const utils = require('../utils/utils')
const sha256 = utils.sha256

class UserService {
	static async get(id) {
		try {
			const user = await UserDAO.fetch(id)
			return user
		} catch (err) {
			throw err
		}
	}

	static async find(filter) {
		try {
			const users = await UserDAO.find(filter.filterData(), filter.pagination)
			return users
		} catch (err) {
			throw err
		}
	}

	static async count(filter) {
		try {
			return await UserDAO.count(filter.filterData())
		} catch (err) {
			throw err
		}
	}

	static async save(user) {
		try {
			user = await UserDAO.save(user)
			return user
		} catch (err) {
			throw err
		}
	}

	static async update(id, user) {
		try {
			user = await UserDAO.update(id, user)
			return await this.get(id)
		} catch (err) {
			throw err
		}
	}

	static async delete(id) {
		try {
			return await UserDAO.delete(id)
		} catch (err) {
			throw err
		}
	}

}

module.exports = UserService