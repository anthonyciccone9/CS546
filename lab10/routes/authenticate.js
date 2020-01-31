//I pledge my honor that I have abided by the Stevens Honor System. aciccone
const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const users = require("../users");
const {isLoggedIn} = require("../middleware/mw");

router.get("/", async (req, res) => {
  if(!req.session.user){
    // has req.session.user means user is logged in
    return res.render("login");
  }else{
    return res.redirect("/private");
  }
});

router.post("/login", async (req, res) => {
  if(!req.body){
    return res
      .status(400)
      .render("err", {err:{status: 400, msg: "No req.body!"}});
  }
  const {username, password} = req.body;
  if(!username || !password){
    return res.status(401).render("err", {
      err: { status: 401, msg: "Invalid Username or Password!"}
    });
  }

  const user = users.find(user => user.username === username);
  if(!user){
    return res.status(401).render("err", {
      err: { status: 401, msg: "Invalid Username or Password!"}
    });
  }

  let match;
  try {
    match = await bcrypt.compare(password, user.hashedPassword);
  } catch(e){
    console.log(e);
  }

  if(match){
    req.session.user = user;
    return res.redirect("/private");
  } else {
    return res.status(401).render("err", {
      err: {status: 401, msg: "Invalid Username or Password!"}
    });
  }
});

router.get("/private", isLoggedIn, async (req, res) => {
  return res.render("private", {userInfo: req.session.user});
});

router.get("/logout", isLoggedIn, async (req, res) => {
  req.session.destroy();
  return res.render("logout", {});
});

module.exports = router;
