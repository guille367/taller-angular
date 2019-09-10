module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('permission', {
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
            code: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
        })

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('permission')
    }
}