const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const galleryItems = require('./gallery.data');

router.get('/', (req, res) => {

  const query = `SELECT * FROM park ORDER BY "park_id" ASC`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all parks', err);
      res.sendStatus(500)
    })

});

router.post('/', (req, res) => {
  console.log(req.body);
  // RETURNING "id" will give us back the id of the created movie
  const insertPark = `
  INSERT INTO "park" ("park_id", "address", "description", "photo")
  VALUES ($1, $2, $3, $4)
  RETURNING "id";`

  // FIRST QUERY MAKES PARK
  pool.query(insertPark, [req.body.park_id, req.body.address, req.body.description])
  .then(result => {
    console.log('New Park Id:', result.rows[0].id); //ID IS HERE!
    
    const createdParkId = result.rows[0].id

    // // Now handle the genre reference
    // const insertMovieGenreQuery = `
    //   INSERT INTO "movies_genres" ("movie_id", "genre_id")
    //   VALUES  ($1,$2);
    //   `
    //     //SECOND QUERY ADDS GENRE FOR THAT NEW MOVIE
    //   pool.query(insertMovieGenreQuery, [createdMovieId, req.body.genre_id]).then(result => {
    //     Now that both are done, send back success!
    //     res.sendStatus(201);
    //   }).catch(err => {
    //     // catch for second query
    //     console.log(err);
    //     res.sendStatus(500)
    //   })

// Catch for first query
  }).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
})

module.exports = router;


// // PUT Route
// router.put('/like/:id', (req, res) => {
//   console.log(req.params);
//   const galleryId = req.params.id;
//   for(const galleryItem of galleryItems) {
//       if(galleryItem.id == galleryId) {
//           galleryItem.likes += 1;
//       }
//   }
//   res.sendStatus(200);
// }); // END PUT Route

// // This route *should* return the logged in users pets
// router.get('/', (req, res) => {
//   console.log('/park GET route');
//   // req.isAuthenticated() and req.user are provided by
//   // Passport.
//   console.log('is authenticated?', req.isAuthenticated());
//   // STEP 1: Are we authenticated?
//   if(req.isAuthenticated()) {
//       // ! User is logged in
//       console.log('user', req.user);
//       let parameters = [req.user.id];
//       let queryText = `SELECT * FROM "park" WHERE "user_id" = $1;`;
      
//       // ! This is authorization, very unlikely you will
//       // ! need this for solo projects.
//       // if(req.user.access_level > 5) {
//            // This user has access to view ALL pets
//       //     queryText = `SELECT * FROM "pets";`;
//       //     parameters = [];
//       // }

//       // ! DO NOT pass the user id from the client for data that 
//       // ! requires authentication.
//       // STEP 2: Use the logged in users id (req.user.id) to GET
//       // the list of pets.
//       pool.query(queryText, parameters).then((result) => {
//           res.send(result.rows);
//       }).catch((error) => {
//           console.log(error);
//           res.sendStatus(500);
//       });
//   } else {
//       // ! User is NOT logged in
//       res.sendStatus(403);
//   }
// });


// /**
//  * GET route template - 
//  * !! route to DB
//  */
// router.get('/', (req, res) => {
//   res.send(galleryItems);
//   // GET route code here

// });

// /**
//  * POST route template
//  */
// // This route *should* add a pet for the logged in user

// router.post('/', (req, res) => {
//   // POST route code here
//   console.log('/park POST route');
//   console.log(req.body);
//   console.log('is authenticated?', req.isAuthenticated());
//   console.log('user', req.user);
//   if(req.isAuthenticated()) {
//       let queryText = `INSERT INTO "parks" ("name", "user_id") VALUES ($1, $2);`;
//       pool.query(queryText, [req.body.name, req.user.id]).then(results => {
//           res.sendStatus(201);
//       }).catch(error => {
//           console.log(`error ${error}`);
//           res.sendStatus(500);
//       })
//   } else {
//       res.sendStatus(403);
//   }
// });
