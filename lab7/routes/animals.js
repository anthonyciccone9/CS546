//I pledge my honor that I have abided by the Stevens Honor System. aciccone
const express = require("express");
const router = express.Router();
const data = require("../data");
const animalData = data.animals;

router.get("/:id", async (req, res) => {
  try {
    const animal = await animalData.get(req.params.id);
    res.json(animal);
  } catch (e) {
    res.status(404).json({ message: "not found!" });
  }
});
router.get("/", async (req, res) => {
  try {
    const animalList = await animalData.getAll();
    res.json(animalList);
  } catch (e) {
    res.status(500).send();
  }
});
router.post("/", async (req, res) => {
  let anii = req.body;
  if(!anii){
    res.status(400).json({error: "You must provide an object to post!"})
  }
  if(!anii.name){
    res.status(400).json({erorr: "You must provide a name!"})
  }
  if(!anii.animalType){
    res.status(400).json({erorr: "You must provide a type!"})
  }
  const newAnimal = await animalData.create(anii.name, anii.animalType);
  res.json(newAnimal);
});
router.put("/:id", async (req,res) => {
  let anii = req.body;
  if(!anii){
    res.status(400).json({error: "You must provide an object to post!"})
  }
  if(!anii.newName){
    res.status(400).json({error: "You must provide a name!"})
  }
  if(!anii.newType){
    res.status(400).json({error: "You must provide a type!"})
  }
  try {
    let animal = await animalData.get(req.params.id);
    animal = await animalData.updateAnimal(animal._id,anii)
    res.json(animal);
  } catch (e) {
    res.status(404).json({ message: "not found!" });
  }
})
router.delete("/:id", (req, res) => {
  let getAnimal = animalData.get(req.params.id);
  getAnimal.then(() => {
    return animalData.remove(req.params.id).then(() => {
      res.sendStatus(200);
    }).catch((e) => {
      res.status(404).json({error: "404 ani not found!"});
    });
  });
});



module.exports = router;
