
// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movie.model");



// GET "/movies/create" => mostrar el formulario para crear una película
router.get("/create" , async (req, res, next)=>{

    try {

        const response = await Celebrity.find().select ({name: 1})


        res.render("movies/new-movie.hbs", {
 
         celebrityNames:response

        })

    }catch(error){
        next(error)
    }

})



// POST "/movies/create" => enviar los datos del formulario a esta routa para crear una película y almacenarla en el database


router.post("/create", async (req,res,next)=>{

    const{title, genre, plot, cast } = req.body;

    try{

        await Movie.create({

            title,
            genre,
            plot,
            cast,
        })
        res.redirect("/movies")
    }catch(error){
        next(error)
    }

})



// GET "/movies/:id" enviar al usuario a ver detalles de la peli selected


router.get("/:id" ,async (req,res,next)=>{

    try {

        const response = await Movie.findbyId(req.params.id).populate("cast");
        res.render("movies/movie-details.hbs", {

            checkMovie: response
        })

    }catch(error){
        next(error)
    }





})


// GET "/create" => mostrar las películas
router.get("/", async (req, res, next)=>{

    try{

       const allMovies = await Movie.find()
        res.render("movies/movies.hbs", {

            allMovies
        })
    

    }catch(error){
        next(error)
    }


})


// GET "/movies/:id" senseñar una peli en concreto
router.get("/:id", async (req,res,next)=>{

        try {

            const movieDetails = await Movie.findById(req.params.id).populate("cast")

            res.render("movies/movie-details", {

                movieDetails

            })

            console.log(movieDetails)
            
        }catch(error){

            next(error)
        }






})











module.exports = router;