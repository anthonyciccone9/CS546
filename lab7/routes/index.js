//I pledge my honor that I have abided by the Stevens Honor System. aciccone
const express = require("express");
const app = express();
const postRoutes = require("./posts");
const animalRoutes = require("./animals");

const constructorMethod = app => {
  app.use("/posts", postRoutes);
  app.use("/animals", animalRoutes);

  app.use("*", (req, res) => {
    res.sendStatus(404);
  });
};

constructorMethod(app);
module.exports = constructorMethod;
