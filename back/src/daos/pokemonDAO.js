const models = require('../models/index')
const Pokemon = models.Pokemon

const pokemonOptions = {
    include: Pokemon.relations(models),
};

class PokemonDAO{
    static save(pokemon){
        return Pokemon.create(pokemon.dataValues, pokemonOptions)
    }

    static fetch(id){
        return Pokemon.findById(id, pokemonOptions)
    }

    static find(filter, pagination){
        return Pokemon.findAll({where: filter, ...pokemonOptions, ...pagination})
    }

    static count(filter){
        return Pokemon.count({where: filter})
    }

    static update(id, pokemon){
		pokemon.id = id
		return Pokemon.update(pokemon.dataValues, { where: { id }, ...pokemonOptions })
    }

    static delete(id){
        return Pokemon.destroy({where:{id}})
    }
}

module.exports = PokemonDAO