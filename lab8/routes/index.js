//I pledge my honor that I have abided by the Stevens Honor System. aciccone
const express = require("express");
const router = express.Router();
const peoples = require("../data/people");

router.get("/", (req,res) => {
    res.render("templates/finder",{title: "People Finder"});
});

router.post("/search", async(req,res) => {
  let pfound = await peoples.getPeople();
  let name = req.body.personName.toLowerCase();
  let foundeded = pfound.filter((person) => {
    let currname = person.firstName.toLowerCase() + " " + person.lastName.toLowerCase();
    if(currname.includes(name)) return person;
  });
  foundeded.splice(20);
  res.render("templates/pfinder", {person : foundeded.map((person) => {
    return {name : person.firstName + " " + person.lastName, id: person.id};
  })
  , title: "People Found", name: name, hasPosts: (foundeded.length !== 0)});
});

router.get("/details/:id", async(req,res) => {
  let person = await peoples.getPersonById(parseInt(req.params.id));
  person["name"] = person.firstName + " " + person.lastName;
  person["title"] = "Person Found";
  res.render("templates/pfound", person);
});

const contstructorMethod = app => {
  app.use("/", router);
  app.use("*", (req,res) => {
    res.redirect("/");
  });
};

module.exports = contstructorMethod;
