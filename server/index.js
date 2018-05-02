require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const ctrl = require('./controller.js');
const PORT = 4000;
const session = require('express-session')

const app = express()

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    maxAge: 60 * 60 * 24 * 14
}))
const massive = require('massive')


massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database)
})
app.post('/api/finduser', ctrl.findUser)
app.get('/api/queryresults',ctrl.queryResults)
app.get('/api/ourfestivals',ctrl.getOurList)
app.get('/api/genres', ctrl.displayGenres)
app.get('/api/getyourlist',ctrl.getYourList)
app.post('/api/newuser', ctrl.createUser)
app.listen(PORT, () => console.log("You are running on port 4000"))
