//I pledge my honor that I have abided by the Stevens Honor System. aciccone
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const static = express.static(__dirname + "/public");
const path = require("path");

app.use("/public", static);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(3000, () => {
    console.log("Running on http://localhost:3000");
});
