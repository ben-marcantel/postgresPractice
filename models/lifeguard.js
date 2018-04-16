'use strict';
module.exports = (sequelize, DataTypes) => {
  var Lifeguard = sequelize.define('Lifeguard', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    // beach_id: DataTypes.INTEGER
  }, {timestamps:false, tableName:"lifeguards"});

  Lifeguard.associate = function(models) {
    Lifeguard.belongsTo(models.Beach, {
      foreignKey: "beachId",
      onDelete: "CASCADE"
    })
  };


  // let awesomeGuard = {
  //   first_name: "Aqua",
  //   last_name: "Cat",
  //   beach_id: 2
  // }
  
  // Lifeguard.create(awesomeGuard)
  // .then(function(lifeguard) {
  //   console.log('lifeguard saved:', lifeguard.first_name);
  // });
  // Lifeguard.prototype.getFullName = function() {
  //   return `${this.first_name} ${this.last_name}`
  // }
  return Lifeguard;
};