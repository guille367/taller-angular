const GenericModelDTO = require('./genericModelDTO')

class RoleDTO extends GenericModelDTO {
    constructor(){
		super()
		this.id = null
		this.name = null
		this.code = null
    }

    hydrate(data){
        super.hydrate(data)
    }
}

module.exports = RoleDTO