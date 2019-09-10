module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('pokemon', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,
        
        nombre: Sequelize.STRING,
		numero: Sequelize.INTEGER,
        })
        
    },
    
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('pokemon');
    }
};