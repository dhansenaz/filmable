const session = require('express-session')


module.exports = {

    getOurList:(request, response) => {
        const db = request.app.get('db')

        db.getOurList().then(festivals => {
            response.status(200).send(festivals)
            console.log(festivals)
            
        }).catch(error => {
            console.log(error)
        }) 

    },
    
    displayGenres:(request, response) =>{
        const db = request.app.get('db')

        db.displayGenres().then(genres => {
            response.status(200).send(genres)
            // console.log(genres)
        })

    },
    getYourList:(req, res) => {
        const db = req.app.get('db')
        
        db.getYourList().then(festivals_genres => {
            res.status(200).send(festivals_genres)
            // console.log(festivals_genres)
        })

    },
    createUser:(req,res) => {
        const db = req.app.get('db')
        const {email, password} = req.body

        db.createUser([email, password]).then(user => {
            res.status(200).send(user)
        })

    },
    findUser:(req,res) => {
        const db = req.app.get('db')
        console.log(req.query)
        const {email, passwword} = req.body
        console.log(email)
        db.findUser([email]).then(response => {
            req.session.user = response[0]
            res.status(200).send(req.session.user)
            res.redirect('/')
            
        })
    }
}