const story = require("./story");
const education = require("./education");
const about = require("./about");

const constructorMethod = app => {
  app.use("/story", story);
  app.use("/education", education);
  app.use("/about", about);
  app.use("*", (req, res) =>{
      res.status(404).json({error: "404 Json not found"});
  });
};

module.exports = constructorMethod;
