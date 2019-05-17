'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint(
      'Bookmarks', // table name
      ['userid'],{ // column on which the constraint will be added
        type: 'FOREIGN KEY', // type of constraint
        name: 'FK_userid', // constraint name
        references: {
          table: 'Users',
          field: 'id'
        }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint(
      'Bookmarks', // name of the table
      'FK_userid' // name of the constraint
    )}
};
