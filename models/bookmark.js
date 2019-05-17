'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookmark = sequelize.define('Bookmark', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    description: DataTypes.STRING,
    url: DataTypes.STRING,
    userid: DataTypes.INTEGER
  }, {});
  Bookmark.associate = function(models) {
    Bookmark.belongsTo(models.User,{
      as: 'user',
      foreignKey: 'userid'
    })
  };
  return Bookmark;
};