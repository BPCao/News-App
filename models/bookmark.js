'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookmark = sequelize.define('Bookmark', {
    author: DataTypes.STRING,
    title: DataTypes.STRING,
    source: DataTypes.STRING,
    published: DataTypes.STRING,
    userid: DataTypes.STRING
  }, {});
  Bookmark.associate = function(models) {
    // associations can be defined here
  };
  return Bookmark;
};