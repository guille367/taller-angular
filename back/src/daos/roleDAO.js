const models = require('../models/index')
const Role = models.Role

const roleOptions = {
    include: Role.relations(models),
};

class RoleDAO{
    static save(role){
        return Role.create(role.dataValues, roleOptions)
    }

    static fetch(id){
        return Role.findByPk(id, roleOptions)
    }

    static find(filter, pagination){
        return Role.findAll({where: filter, ...roleOptions, ...pagination})
    }

    static count(filter){
        return Role.count(filter)
    }

    static update(id, role){
		role.id = id
		return Role.update(role.dataValues, { where: { id }, ...roleOptions })
    }

    static delete(id){
        return Role.destroy({where:{id}})
    }
}

module.exports = RoleDAO