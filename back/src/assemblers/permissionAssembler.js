const GenericAssembler = require('./genericAssembler')


const Permission = require('../models/').Permission
const PermissionDTO = require('../dtos/permissionDTO')

class PermissionAssembler extends GenericAssembler{

	static toDTOs(permissions) {
		return super.convertList(permissions, PermissionAssembler.toDTO)
	}

	static fromDTOs(permissionsDTO) {
		return super.convertList(permissionsDTO, PermissionAssembler.fromDTO)
	}

	static toDTO(permission) {
		const permissionDTO = super.toDTO(permission, PermissionDTO)
		permissionDTO.name = permission.name
		permissionDTO.code = permission.code
		
		return permissionDTO
	}

	static fromDTO(permissionDTO) {
		const permission = super.fromDTO(permissionDTO, Permission)
		permission.name = permissionDTO.name
		permission.code = permissionDTO.code
		
		return permission
	}

}

module.exports = PermissionAssembler