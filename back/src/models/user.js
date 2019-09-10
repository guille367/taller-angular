module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: DataTypes.STRING,
		password: DataTypes.STRING,
		salt: DataTypes.STRING,
    }, {
        timestamps: true,
        underscored: true,
        tableName: 'user',
        indexes: []
    });

    User.relations = (models) => {
        return [
//<associations>
{
	type: 'belongsTo',
	model: models.Role,
	as: 'role',
	foreignKey: 'id',
	sourceKey: 'role_id'
}    
//</associations>
        ]
    }

    User.associate = function(models) {
        User.relations(models).forEach(relation => {
        const {type, model, ...description} = relation
        User[type](model, description)
        })
    };
    return User;
};
