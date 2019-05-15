'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => 
  {
    return queryInterface.addColumn(
      'Bookmarks',
      'userid',
     Sequelize.STRING)
  },

  down: (queryInterface, Sequelize) => 
  {
    return queryInterface.removeColumn(
      'Bookmarks',
      'userid',
     Sequelize.STRING)
  }
};
