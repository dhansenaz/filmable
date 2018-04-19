const express = require('express')
const bodyParser = require('body-parser')
const ctrl = require('./controller.js');
const PORT = 4000;

const app = express()

app.use(bodyParser.json());

const massive = require('massive')
require('dotenv').config()

massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database)
})

app.get('/api/ourfestivals',ctrl.getOurList)
app.get('/api/genres', ctrl.displayGenres)

app.listen(PORT, () => console.log("You are running on port 4000"))
