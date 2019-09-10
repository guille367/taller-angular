module.exports = {
	up: async (queryInterface, Sequelize) => {
		try {
			await queryInterface.createTable('role', {
				id: {
					type: Sequelize.INTEGER,
					primaryKey: true,
					autoIncrement: true,
				},

				created_at: Sequelize.DATE,
				updated_at: Sequelize.DATE,

				name: {
					type: Sequelize.STRING,
					allowNull: false,
					unique: true,
				},
				code: Sequelize.STRING,
			})
			await queryInterface.createTable('role_permission', {
				role_id: {
					type: Sequelize.INTEGER,
					references: { model: 'role', key: 'id' }
				},
				permission_id: {
					type: Sequelize.INTEGER,
					references: { model: 'permission', key: 'id' }
				},
			})
		}
		catch (err) {
			throw err
		}
	},

	down: async (queryInterface, Sequelize) => {
		try {
			await queryInterface.dropTable('role')
			await queryInterface.dropTable('role_permission')
		} catch (err) {
			throw err
		}
	}
}