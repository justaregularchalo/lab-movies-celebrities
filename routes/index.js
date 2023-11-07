const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});



//esto lleva la página de celebrities al index
const celebritiesRouter = require("./celebrities.routes.js")
router.use("/celebrities", celebritiesRouter)


// esto lleva la página de movies al index
const moviesRouter = require("./movies.routes.js")
router.use("/movies", moviesRouter)


module.exports = router;
