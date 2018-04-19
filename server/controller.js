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
            console.log(genres)
        })

    }
}