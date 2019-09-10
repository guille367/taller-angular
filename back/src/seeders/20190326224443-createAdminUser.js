const utils = require('../utils/utils')
const genRandomString = utils.genRandomString
const sha256 = utils.sha256

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const sequelize = queryInterface.sequelize;
		const { salt, passwordHash } = sha256('admin', genRandomString(16))
		const adminRole = await sequelize.query(
			'SELECT id FROM role WHERE code = \'admin\';', { type: sequelize.QueryTypes.SELECT}
		)
		return queryInterface.bulkInsert('user', [{
			username: 'admin',
			password: passwordHash,
			salt,
			role_id: adminRole[0].id,
		}]
		, {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('user', { username: 'admin' });
	}
};