module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define('Role', {
        name: DataTypes.STRING,
		code: DataTypes.STRING
    }, {
        timestamps: true,
        underscored: true,
        tableName: 'role',
        indexes: []
    });

    Role.relations = (models) => {
        return [
//<associations>
{
	type: 'belongsToMany',
	model: models.Permission,
	as: 'permissions',
	through: 'role_permission',
	timestamps: false,
	foreignKey: 'role_id'
},
{
	type: 'hasMany',
	model: models.User,
	as: 'users',
	timestamps: false,
},
//</associations>
        ]
    }

    Role.associate = function(models) {
        Role.relations(models).forEach(relation => {
        const {type, model, ...description} = relation
        Role[type](model, description)
        })
    };
    return Role;
};
