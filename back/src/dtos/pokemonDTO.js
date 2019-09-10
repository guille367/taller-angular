const GenericModelDTO = require('./genericModelDTO')

class PokemonDTO extends GenericModelDTO {
    constructor(){
		super()
		this.id = null
		this.nombre = null
		this.numero = null
    }

    hydrate(data){
        super.hydrate(data)
    }
}

module.exports = PokemonDTO