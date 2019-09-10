'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('permission', [{
      name: 'ver permiso',
      code: 'show_permission',
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
    await queryInterface.bulkInsert('permission', [{
      name: 'crear permiso',
      code: 'create_permission',
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
    await queryInterface.bulkInsert('permission', [{
      name: 'editar permiso',
      code: 'edit_permission',
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
    await queryInterface.bulkInsert('permission', [{
      name: 'eliminar permiso',
      code: 'delete_permission',
      created_at: new Date(),
      updated_at: new Date(),
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('permission', { code: 'show_permission' })
    await queryInterface.bulkDelete('permission', { code: 'create_permission' })
    await queryInterface.bulkDelete('permission', { code: 'edit_permission' })
    await queryInterface.bulkDelete('permission', { code: 'delete_permission' })
  }
};
