module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('role', [{
			name: 'admin',
			code: 'admin',
			created_at: new Date(),
			updated_at: new Date(),
		}], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('role', { code: 'admin' });
	}
};