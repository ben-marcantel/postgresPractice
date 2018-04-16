"use strict";

let sequelize = require('sequelize');
let queryInterface = require('sequelize/lib/query-interface');

let { beaches } = require("./seeders/data/beaches");
let { lifeguards } = require("./seeders/data/lifeguards");


let createdb = (queryInterface) => {
    const app = require('./app'); 
    const models = app.get('models');
    return models.sequelize.sync({ force: true })
      .then((queryInterface) => {
        return models.Beach.bulkCreate(beaches)
      }).then((queryInterface) => {
        return models.Lifeguard.bulkCreate(lifeguards)
      }).then(() => {
        process.exit();
      })
      .catch((err) => {
        console.log("oh noes!", err);
      })
  }
  //don't forget to actually call the function. Or, bonus, rewrite it as an iife.
  createdb(queryInterface);