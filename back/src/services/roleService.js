const RoleDAO = require('../daos/roleDAO')

class RoleService{
    static async get(id) {
		try {
			const role = await RoleDAO.fetch(id)
			return role
		} catch(err) {
			throw err
		}
    }

	static async find(filter) {
		try {
			const roles = await RoleDAO.find(filter.filterData(), filter.pagination)
			return roles
		} catch(err) {
			throw err
		}
	}

    static async count(filter) {
		try {
			return await RoleDAO.count(filter.filterData())
		} catch (err) {
			throw err
		}
    }

    static async save(role) {
		try {
			role = await RoleDAO.save(role)
            return role
		} catch (err) {
			throw err
		}
    }

	static async update(id, role) {
		try {
			role = await RoleDAO.update(id, role)
			return await this.get(id)
		} catch (err) {
			throw err
		}
    }

    static async delete(id) {
		try {
			return await RoleDAO.delete(id)
		} catch (err) {
			throw err
		}
    }
}

module.exports = RoleService