const express = require("express");
const router = express.Router();

router.get("/", async function (req, res) {
  try{
    const about = {
      "name": "Anthony Ciccone",
      "cwid": "10420930",
      "biography": "I am a Brooklyn-born New Jersey raised Italian boy. I lived in a small beach town called Hazlet in central New Jersey with my two parents and sister. Home life was rather boring and my high school was definitly nothing to think back on. Currently I am a sophomore at college, and I live in the best dorm on campus. I am a part of the greek fraternity Phi Sigma Kappa, and am an avid gym goer. I am rather confused on why this had to be so long, but I did my best irregardless.",
      "favoriteShows": ["Letterenny", "Rick and Morty", "Misc Youtube Videos"],
      "hobbies": ["Video Games", "Working Out", "Reading"]
    };
    return res.json(about);
  }catch (e){
    res.status(500).send();
  }
});

module.exports = router;
