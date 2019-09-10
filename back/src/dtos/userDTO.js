const GenericModelDTO = require('./genericModelDTO')

class UserDTO extends GenericModelDTO {
	constructor() {
		super()
		this.id = null
		this.username = null
		this.password = null
		this.salt = null
		this.role = null
		this.permissions = null
	}

	hydrate(data) {
		super.hydrate(data)
	}
}

module.exports = UserDTO