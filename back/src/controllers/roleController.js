const GenericController = require('./genericController')
const RoleService = require('../services/roleService')
const RoleDTO = require('../dtos/roleDTO')
const RoleFilter = require('../filters/roleFilter')
const RoleAssembler = require('../assemblers/roleAssembler')

class RoleController extends GenericController{

    static getRoleById(req, res, next) {
        const id = req.params.id
        RoleController.resolve(next, RoleService.get(id), role => {
            res.status(200).send({
                data: RoleAssembler.toDTO(role),
            })
        })
    }

    static getRoles(req, res, next) {
        const filter = new RoleFilter()
        filter.fillData(req.query)
        RoleController.resolve(next,
                Promise.all([
                    RoleService.find(filter), 
                    RoleService.count(filter)
                ]), results => {
            res.status(200).send({
                data: {
                    list: RoleAssembler.toDTOs(results[0]),
                    total:results[1],
                    offset: filter.pagination.offset,
                    limit: filter.pagination.limit
                }
            })
        })
    }
    
    static createRole(req, res, next) {
        let roleDTO = new RoleDTO()
        roleDTO.hydrate(req.body)
        RoleController.resolve(next, RoleService.save(RoleAssembler.fromDTO(roleDTO)), role => {
                res.status(201).send({
                    data: RoleAssembler.toDTO(role)
                })
            })
    }
    
    static updateRole(req, res, next) {
        let id = req.params.id
        let roleDTO = new RoleDTO()
        roleDTO.hydrate(req.body)
        RoleController.resolve(next, RoleService.update(id, RoleAssembler.fromDTO(roleDTO)), role => {
                res.status(200).send({
                    data: RoleAssembler.toDTO(role)
                })
            })
    }
    
    static deleteRole(req, res, next) {
        let id = req.params.id
        RoleController.resolve(next, RoleService.delete(id), message => {
                res.status(200).send({
                    data: message
                })
            })
    }
}

module.exports = RoleController