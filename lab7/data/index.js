//I pledge my honor that I have abided by the Stevens Honor System. aciccone
const postData = require("./posts");
const animalData = require("./animals");

async function main() {
    const morty = await animals.create("Mortimer", "Giraffe");
  }

module.exports = {
  animals: animalData,
  posts: postData
};
