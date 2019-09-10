module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addColumn('user', 'role_id', Sequelize.INTEGER)
		return await queryInterface.addConstraint('user', ['role_id'], {
			type: 'foreign key',
			name: 'fk_usuario_role_to_role_id',
			references: {
				table: 'role',
				field: 'id'
			},
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.removeColumn('user', 'role_id')
	}
};
