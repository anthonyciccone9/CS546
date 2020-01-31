//I pledge my honor that I have abided by the Stevens Honor System. aciccone
const express = require("express");
const router = express.Router();
const data = require("../data");
const postData = data.posts;

router.get("/:id", async (req, res) => {
  try {
    const post = await postData.getPostById(req.params.id);
    res.json(post);
  } catch (e) {
    res.status(404).json({ message: "Post not found" });
  }
});
router.get("/", async (req, res) => {
  try {
    const postList = await postData.getAllPosts();
    res.json(postList);
  } catch (e) {
    res.status(500).send();
  }
});
router.post("/", async (req, res) => {
  let posti = req.body;
  if(!posti){
    res.status(400).json({error: "You must provide an object to post!"})
  }
  if(!posti.title){
    res.status(400).json({erorr: "You must provide a title!"})
  }
  if(!posti.author){
    res.status(400).json({erorr: "You must provide an author!"})
  }
  if(!posti.content){
    res.status(400).json({erorr: "You must provide content!"})
  }
  const newPost = await postData.addPost(posti.title, posti.content, posti.author);
  res.json(newPost);
});
router.put("/:id", async (req,res) => {
  let posti = req.body;
  if(!posti){
    res.status(400).json({error: "You must provide an object to post!"})
  }
  if(!posti.newTitle && !posti.newContent){
    res.status(400).json({error: "You must provide a title and or a post."})
  }
  try {
    let post = await postData.getPostById(req.params.id);
    post = await postData.updatePost(post._id,posti)
    res.json(post);
  } catch (e) {
    console.log(e);
    res.status(404).json({ message: "not found!" });
  }
})
router.delete("/:id", (req, res) => {
  let getPost = postData.getPostById(req.params.id);
  getPost.then(() => {
    return postData.removePost(req.params.id).then(() => {
      res.sendStatus(200);
    }).catch((e) => {
      res.status(404).json({error: "404 post not found!"});
    });
  });
});

module.exports = router;
