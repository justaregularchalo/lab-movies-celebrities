
// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");







// GET "/celebrities/create" => mostrar el formulario para crear una celebridad

router.get("/create", (req, res, next)=>{

        Celebrity.find()

        .then((response)=>{

            res.render("celebrities/new-celebrity.hbs", {

                allCelebrities: response
            })


        })
        .catch((error)=>{

            next(error)

        })



})


// POST "/create" => enviar los datos del formulario a esta routa para crear una celebridad y almacenarla en el database

router.post("/create", async (req,res,next)=>{

    try{

        const{name, occupation, catchPhrase} = req.body

        await Celebrity.create({name, occupation, catchPhrase} )
        res.redirect("/celebrities")



    }catch(error){


        next(error)
    }



})

// GET "/create" => mostrar las celebridades


router.get("/", async (req, res, next)=>{

    try{

       const allCelebrities = await Celebrity.find()
        res.render("celebrities/celebrities.hbs", {

            allCelebrities
        })
    

    }catch(error){
        next(error)
    }


})



















// all your routes here

module.exports = router;