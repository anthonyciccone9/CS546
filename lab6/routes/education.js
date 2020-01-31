const express = require("express");
const router = express.Router();

router.get("/", async function (req, res) {
  try{
    const education = [
        {
          "schoolName": "Hazlet Middle School",
          "degree": "Middle School Degree",
          "favoriteClass": "Gym",
          "favoriteMemory": "When I dated my first girlfriend. Oh what a youngster I was"
        },
        {
          "schoolName": "Raritan High School",
          "degree": "High School Degree",
          "favoriteClass": "TV Production",
          "favoriteMemory": "Graduation. High School was the worst."
        },
        {
          "schoolName": "Stevens Institute of Technolog",
          "degree": "Bachelor's Degree",
          "favoriteClass": "CS546WS",
          "favoriteMemory": "One of my favorite memories at school is when I joined my fraternity I guess because everything I do is pretty much in line with that and if I hadnt joined Id be a goober."
        }
    ];
    return res.json(education);
  }catch (e){
    res.status(500).send();
  }
});

module.exports = router;
