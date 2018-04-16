"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("models", require("./models"));
const models = app.get("models");
const { Lifeguard, Beach} = app.get("models");

// middleware stack
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/beaches", (req, res, next) => {
    Beach.findAll()
      .then(beaches => {
        res.status(200).json(beaches);
      })
      .catch(err => {
        console.log("ooops", err);
        res.status(500).json({ error: err });
      });
  });
  
  app.get("/beaches/:id", (req, res, next) => {
    Beach.findOne({
      raw: true,
      where: { id: req.params.id },
      include: [{ model: Beach, attributes: ["name"] }]
    })
    .then( (show) => {
      res.status(200).json(show);
    })
    .catch( (err) => {
      // blah
    })
  });
  

  app.get("/lifeguards", (req, res, next) => {
    Lifeguard.findAll( )
      .then(lifeguards => {
        res.status(200).json(lifeguards);
      })
      .catch(err => {
        console.log("ooops", err);
        res.status(500).json({ error: err });
      });
  });
  
  // app.get("/lifeguards/:id", (req, res, next) => {
  //   Lifeguard.findOne({
  //     raw: true,
  //     where: { id: req.params.id },
  //     include: [{ model: Lifeguard, attributes: ["first_name"] }]
  //   })
  //   .then( (show) => {
  //     res.status(200).json(show);
  //   })
  //   .catch( (err) => {
  //     // blah
  //   })
  // });




 

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;