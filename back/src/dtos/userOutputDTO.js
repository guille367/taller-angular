const GenericModelDTO = require('./genericModelDTO')

class UserOutputDTO extends GenericModelDTO {
    constructor(){
		super()
		this.id = null
		this.username = null
    }

    hydrate(data){
        super.hydrate(data)
    }
}

module.exports = UserOutputDTO