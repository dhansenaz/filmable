const session = require("express-session");

module.exports = {
  getOurList: (request, response) => {
    const db = request.app.get("db");

    db.getOurList()
      .then(festivals => {
        response.status(200).send(festivals);
        // console.log(festivals)
      })
      .catch(error => {
        console.log(error);
      });
  },

  displayGenres: (request, response) => {
    const db = request.app.get("db");

    db.displayGenres().then(genres => {
       genres.forEach((e) =>{
        //    console.log(e)
            e.isClicked = false
        
        })
      response.status(200).send(genres);
    //   console.log(genres)
    });
  },
  getYourList: (req, res) => {
    const db = req.app.get("db");

    db.getYourList().then(festivals_genres => {
      res.status(200).send(festivals_genres);
      // console.log(festivals_genres)
    });
  },
  createUser: (req, res) => {
    const db = req.app.get("db");
    const { email, password } = req.body;
    console.log("email................",email,password)

    db.createUser([email, password]).then(user => {
      res.status(200).send(user);
    });
  },
  findUser: (req, res) => {
    const db = req.app.get("db");
    console.log(req.query);
    const { email, passwword } = req.body;
    console.log(email);
    db.findUser([email]).then(response => {
      req.session.user = response[0];
      res.status(200).send(req.session.user);
      // res.redirect('/')
    });
  },
//   method to send selected genres and get new festival list that meets that criteria
  queryResults: (req, res) => {
    const db = req.app.get("db");
    if(!req.query.genre_id) return res.send([])
    
    let ids = req.query.genre_id;
    console.log(req.query.genre_id)
    if (!Array.isArray(ids)) {
      ids = [+ids];
    } else {
      ids = ids.map(id => {
        return +id;
      });
    }

    db.queryresults([ids]).then(festivals => {
    //   console.log("MATCHING FESTIVALS...........................", festivals);
      res.status(200).send(festivals)
    })
    .catch(error => {
        console.log(error);
      });
  },
  saveFestivals: (req,res) =>{
    const db = req.app.get("db");
    db.saveFestivals().then(() => {

    })
  }
};
