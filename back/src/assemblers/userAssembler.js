const GenericAssembler = require('./genericAssembler')
const User = require('../models/').User
const UserDTO = require('../dtos/userDTO')

class UserAssembler extends GenericAssembler {

	static toDTOs(users) {
		return super.convertList(users, UserAssembler.toDTO)
	}

	static fromDTOs(usersDTO) {
		return super.convertList(usersDTO, UserAssembler.fromDTO)
	}

	static toDTO(user) {
		const userDTO = super.toDTO(user, UserDTO)
		userDTO.username = user.username
		userDTO.password = user.password
		userDTO.salt = user.salt
		const role = user.role
		userDTO.role = { id: role.id, name: role.name, code: role.code }
		userDTO.permissions = role.permissions.map(permission => {
			return {
				code: permission.code,
				name: permission.name,
			}
		})

		return userDTO
	}

	static fromDTO(userDTO) {
		const user = super.fromDTO(userDTO, User)
		user.username = userDTO.username
		user.password = userDTO.password
		user.salt = userDTO.salt

		return user
	}

}

module.exports = UserAssembler