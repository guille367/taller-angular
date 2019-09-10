const GenericFilter = require('./genericFilter');
class PokemonFilter extends GenericFilter{
    constructor(){
        super();
        this.data =  Object.assign(this.data,{
            nombre: null,
			numero: null,
        })
    }

};

module.exports = PokemonFilter;