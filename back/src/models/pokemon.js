module.exports = (sequelize, DataTypes) => {
    const Pokemon = sequelize.define('Pokemon', {
        nombre: DataTypes. STRING,
		numero: DataTypes. INTEGER
    }, {
        timestamps: true,
        underscored: true,
        tableName: 'pokemon',
        indexes: []
    });

    Pokemon.relations = (models) => {
        return [
//<associations>
            
//</associations>
        ]
    }

    Pokemon.associate = function(models) {
        Pokemon.relations(models).forEach(relation => {
        const {type, model, ...description} = relation
        Pokemon[type](model, description)
        })
    };
    return Pokemon;
};
