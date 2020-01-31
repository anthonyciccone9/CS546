//I pledge my honor that I have abided by the Stevens Honor System. aciccone
const authenticateRouter = require("./authenticate");

const constructorMethod = app => {
  app.use("/", authenticateRouter);
  app.use("*", (req,res) => {
    return res.redirect("/");
  })
}

module.exports = constructorMethod;
