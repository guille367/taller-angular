const GenericAssembler = require('./genericAssembler')


const User = require('../models').User
const UserOutputDTO = require('../dtos/userOutputDTO')

class UserOutputAssembler extends GenericAssembler{

	static toDTOs(users) {
		return super.convertList(users, UserOutputAssembler.toDTO)
	}

	static fromDTOs(usersDTO) {
		return super.convertList(usersDTO, UserOutputAssembler.fromDTO)
	}

	static toDTO(user) {
		const userDTO = super.toDTO(user, UserOutputDTO)
		userDTO.username = user.username
		
		return userDTO
	}

	static fromDTO(userDTO) {
		const user = super.fromDTO(userDTO, User)
		user.username = userDTO.username
		
		return user
	}

}

module.exports = UserOutputAssembler