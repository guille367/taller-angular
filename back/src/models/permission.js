module.exports = (sequelize, DataTypes) => {
    const Permission = sequelize.define('Permission', {
        name: DataTypes.STRING,
		code: DataTypes.STRING
    }, {
        timestamps: true,
        underscored: true,
        tableName: 'permission',
        indexes: []
    });

    Permission.relations = (models) => {
        return [
//<associations>
{
	type: 'belongsToMany',
	model: models.Role,
	as: 'roles',
	through: 'role_permission',
	timestamps: false,
	foreignKey: 'permission_id'
}
//</associations>
        ]
    }

    Permission.associate = function(models) {
        Permission.relations(models).forEach(relation => {
        const {type, model, ...description} = relation
        Permission[type](model, description)
        })
    };
    return Permission;
};
