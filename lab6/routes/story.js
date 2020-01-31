const express = require("express");
const router = express.Router();

router.get("/", async function (req, res) {
  try{
    const story = {
      "storyTitle": "",
      "story": 'Walter and his wife walk through the door of their house, smelling buttery lobster through the house. “Were home Ezekiel,” said Walter Mitty. “Hey mom hey dad,” he replied, “I cooked some lobster.” “Cool we will come eat in a minute I want to put my jacket and shoes in my room.” “This is very good Ezekiel,” said Walter. “Have a drink dad you must be thirsty, I made your favorite, Root Beer.” “Maybe I will……” \n “Come on men row Row ROW,” said Walter. The sound of the oars hitting the water sounded Psh Psh Psh. The small wooden boat sped through the water with the help of 10 men sweeping the oars against the water.  “Come on, it’s only just up ahead.” The boat parked right next to the tall building. They all rushed upstairs to get the captured workers on the 3rd floor. Walter quickly maneuvered his men and the workers down the stairs and back onto the boat. The got onto the boat and instantly Walter started shouting out commands again, “Alright soldiers just get back to the bunker on 7th street!” \n “What street is this?” Said one of the soldiers, but he was quickly silenced by the crash of thunder all around them. “Heeeeelp!” said an unknown voice. “Over here! Across the street! I’m stuck!” “I got this,” Walter said. As he dove into the 5’ deep water…”Walter! Walter what is wrong?” Said Mrs. Mitty. Walter was spilling his root beer all over himself.'
    };
    return res.json(story);
  }catch (e){
    res.status(500).send();
  }
});

module.exports = router;
