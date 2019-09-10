const GenericController = require('./genericController')
const UserService = require('../services/userService')
const UserDTO = require('../dtos/userDTO')
const UserFilter = require('../filters/userFilter')
const UserAssembler = require('../assemblers/userAssembler')
const UserOutputAssembler = require('../assemblers/userOutputAssembler')


const jsonwebtoken = require('jsonwebtoken')
const secrets = require('../utils/secrets')
const Redis = require('../utils/redis')
class UserController extends GenericController{

    static getUserById(req, res, next) {
        const id = req.params.id
        UserController.resolve(next, UserService.get(id), user => {
            res.status(200).send({
                data: UserOutputAssembler.toDTO(user),
            })
        })
    }

    static getUsers(req, res, next) {
        const filter = new UserFilter()
        filter.fillData(req.query)
        UserController.resolve(next,
                Promise.all([
                    UserService.find(filter), 
                    UserService.count(filter)
                ]), results => {
            res.status(200).send({
                data: {
                    list: UserOutputAssembler.toDTOs(results[0]),
                    total:results[1],
                    offset: filter.pagination.offset,
                    limit: filter.pagination.limit
                }
            })
        })
    }
    
    static createUser(req, res, next) {
        let userDTO = new UserDTO()
        userDTO.hydrate(req.body)
        UserController.resolve(next, UserService.save(UserAssembler.fromDTO(userDTO)), user => {
                res.status(201).send({
                    data: UserOutputAssembler.toDTO(user)
                })
            })
    }
    
    static updateUser(req, res, next) {
        let id = req.params.id
        let userDTO = new UserDTO()
        userDTO.hydrate(req.body)
        UserController.resolve(next, UserService.update(id, UserAssembler.fromDTO(userDTO)), user => {
                res.status(200).send({
                    data: UserOutputAssembler.toDTO(user)
                })
            })
    }
    
    static deleteUser(req, res, next) {
        let id = req.params.id
        UserController.resolve(next, UserService.delete(id), message => {
                res.status(200).send({
                    data: message
                })
            })
    }

	static auth(req, res, next) {
        const requestUsername = req.body.username
        const requestPassword = req.body.password
        UserController.resolve(next, UserService.auth(requestUsername, requestPassword), user => {
            const { id, password, salt, ...jwtPayload } = UserAssembler.toDTO(user)
            const jwt = jsonwebtoken.sign({...jwtPayload}, secrets.jwt)
            Redis.set(requestUsername, {User: { ...jwtPayload }, jwt})
            
            res.status(200).send({
                data: jwt,
            })
        })
    }
}

module.exports = UserController