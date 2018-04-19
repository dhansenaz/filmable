module.exports = {
    getOurList:(request, response) => {
        const db = request.app.get('db')

        db.getOurList().then(festivals => {
            response.status(200).send(festivals)
            console.log(festivals)
            
        }).catch(error => {
            console.log(error)
        }) 

    }
}