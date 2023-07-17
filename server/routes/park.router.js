const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  const userId = req.user.id;
  const queryText = 'SELECT id, title FROM park';
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT park query', err);
      res.sendStatus(500);
    });
});

router.get('/:id', (req, res) => {
  const queryText = 'SELECT * FROM park WHERE id=$1';
  pool.query(queryText, [req.params.id])
    .then((result) => { res.send(result.rows[0]); })
    .catch((err) => {
      console.log('Error completing SELECT park query', err);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
  const { title, description, address, photo } = req.body;
  const queryText = `INSERT INTO park ("description", "address", "photo", "title")
                    VALUES ($1, $2, $3, $4)`;
  const queryValues = [ title, description, address, photo ];
  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error completing SELECT park query', err);
      res.sendStatus(500);
    });
});

router.put('/', (req, res) => {
  const updatedPark = req.body;

  const queryText = `INSERT INTO park (id, title, description, address, photo)
    VALUES ($1, $2, $3, $4, $5)`;

  const queryValues = [
    updatedPark.description,
    updatedPark.address,
    updatedPark.photo,
    updatedPark.title,
    updatedPark.id,
  ];

  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('Error completing SELECT park query', err);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
  console.log('/park POST route');
})


router.delete('/:id', (req, res) => {
  const queryText = 'DELETE FROM park WHERE id=$1';
  pool.query(queryText, [req.params.id])
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('Error completing SELECT park query', err);
      res.sendStatus(500);
    });
});

module.exports = router;