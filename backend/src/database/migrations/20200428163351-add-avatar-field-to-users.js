/* eslint-disable no-unused-vars */

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'users',
    'avatar_id',
    {
      type: Sequelize.INTEGER,
      references: { model: 'files', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    },
  ),

  down: (queryInterface, Sequelize) => queryInterface.removeColumn('users', 'avatar_id'),
};
