'use strict';

const pokemons = require('../../pokemons')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for(let pokemon of pokemons)
      await queryInterface.bulkInsert('pokemon', [{
        nombre: pokemon.nombre,
        numero: pokemon.numero,
        created_at: new Date(),
        updated_at: new Date(),
      }], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('permission', { code: 'show_permission' })
    await queryInterface.bulkDelete('permission', { code: 'create_permission' })
    await queryInterface.bulkDelete('permission', { code: 'edit_permission' })
    await queryInterface.bulkDelete('permission', { code: 'delete_permission' })
  }
};
