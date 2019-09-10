const express = require('express')
const RoleController = require('../controllers/roleController');
const PermissionMiddleware = require('../middlewares/permissionMiddleware')

const api = express.Router();

api.get('/:id', 
    PermissionMiddleware.hasPermission('show_permission'),
    RoleController.getRoleById);
api.get('', 
    PermissionMiddleware.hasPermission('show_permission'),
    RoleController.getRoles);
api.post('', 
    PermissionMiddleware.hasPermission('create_permission'),
    RoleController.createRole);
api.put('/:id', 
    PermissionMiddleware.hasPermission('edit_permission'),
    RoleController.updateRole);
api.delete('/:id', 
    PermissionMiddleware.hasPermission('delete_permission'),
    RoleController.deleteRole);

module.exports = api;