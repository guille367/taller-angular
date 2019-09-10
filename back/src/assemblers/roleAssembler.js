const GenericAssembler = require('./genericAssembler')


const Role = require('../models/').Role
const RoleDTO = require('../dtos/roleDTO')

class RoleAssembler extends GenericAssembler{

	static toDTOs(roles) {
		return super.convertList(roles, RoleAssembler.toDTO)
	}

	static fromDTOs(rolesDTO) {
		return super.convertList(rolesDTO, RoleAssembler.fromDTO)
	}

	static toDTO(role) {
		const roleDTO = super.toDTO(role, RoleDTO)
		roleDTO.name = role.name
		roleDTO.code = role.code
		
		return roleDTO
	}

	static fromDTO(roleDTO) {
		const role = super.fromDTO(roleDTO, Role)
		role.name = roleDTO.name
		role.code = roleDTO.code
		
		return role
	}

}

module.exports = RoleAssembler