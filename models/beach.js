'use strict';
module.exports = (sequelize, DataTypes)=> {
  var Beach = sequelize.define('Beach', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    sand_rating: DataTypes.INTEGER
  }, {timestamps:false, tableName:"beaches"});

  Beach.associate = function (models) {
      Beach.hasMany(models.Lifeguard, {
        foreignKey: 'beachId',
      });
  };
  

    // let awesomeBeach = {
    //   name: "Papohaku Beach",
    //   location: "Molokai, HI, USA",
    //   sand_rating: 8
    // }
    
    // Beach.create(awesomeBeach)
    // .then(function(beach) {
    //   console.log('Beach saved:', beach.name);
    // });




  return Beach;
}