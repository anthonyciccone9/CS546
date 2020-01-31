//I pledge my honor that I have abided by the Stevens Honor System. aciccone
function isLoggedIn(req, res, next) {
  if (!req.session.user) {
    return res
      .status(403)
      .render("err", { err: { status: 403, msg: "Log in instead!!" } });
  } else {
    next();
  }
}

function logger(req, res, next) {
  console.log(`[${new Date().toUTCString()}] ${req.method} ${req.originalUrl}`);
  next();
}

module.exports = {
  isLoggedIn,
  logger
};
