const models = require('../models/index')
const User = models.User

const userOptions = {
    include: User.relations(models),
};

class UserDAO {
    static save(user) {
        return User.create(user.dataValues, userOptions)
    }

    static fetch(id) {
        return User.findById(id, userOptions)
    }

    static find(filter, pagination) {
        return User.findAll({ where: filter, ...userOptions, ...pagination })
    }

    static count(filter) {
        return User.count(filter)
    }

    static update(id, user) {
        user.id = id
        return User.update(user.dataValues, { where: { id }, ...userOptions })
    }

    static delete(id) {
        return User.destroy({ where: { id } })
    }

    static getByUsername(username) {
        return User.findOne({
            where: { username },
            include: [{
                model: models.Role,
                as: 'role',
                include: [{
                    model: models.Permission,
                    as: 'permissions'
                }]
            }]
        })
    }
}

module.exports = UserDAO