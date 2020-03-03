'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    login: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {timestamps:false});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};