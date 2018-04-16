'use strict';
module.exports = (sequelize, DataTypes) => {
  var Castle = sequelize.define('Castle', {
    description: DataTypes.STRING,
    beach_id: DataTypes.INTEGER
  }, {});
  Castle.associate = function(models) {
    // associations can be defined here
  };
  return Castle;
};