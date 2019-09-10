const GenericAssembler = require('./genericAssembler')


const Pokemon = require('../models/').Pokemon
const PokemonDTO = require('../dtos/pokemonDTO')

class PokemonAssembler extends GenericAssembler{

	static toDTOs(pokemons) {
		return super.convertList(pokemons, PokemonAssembler.toDTO)
	}

	static fromDTOs(pokemonsDTO) {
		return super.convertList(pokemonsDTO, PokemonAssembler.fromDTO)
	}

	static toDTO(pokemon) {
		const pokemonDTO = super.toDTO(pokemon, PokemonDTO)
		pokemonDTO.nombre = pokemon.nombre
		pokemonDTO.numero = pokemon.numero
		
		return pokemonDTO
	}

	static fromDTO(pokemonDTO) {
		const pokemon = super.fromDTO(pokemonDTO, Pokemon)
		pokemon.nombre = pokemonDTO.nombre
		pokemon.numero = pokemonDTO.numero
		
		return pokemon
	}

}

module.exports = PokemonAssembler