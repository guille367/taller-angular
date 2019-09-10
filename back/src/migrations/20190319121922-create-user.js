module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('user', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },

            created_at: Sequelize.DATE,
            updated_at: Sequelize.DATE,

            username: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            salt: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        })

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('user');
    }
};