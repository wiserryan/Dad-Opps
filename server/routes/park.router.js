const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  const queryText = 'SELECT id, title FROM park';
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT park query', err);
      res.sendStatus(500);
    });
});

router.get('/details/:id', (req, res) => {
  const queryText = 'SELECT * FROM park WHERE id=$1';
  pool.query(queryText, [req.params.id])
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT park query', err);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
  const newPark = req.body;
  const queryText = `INSERT INTO park ("id", "descripton", "address", "photo", "title")
                    VALUES ($1, $2, $3, $4, $5)`;
  const queryValues = [
    newPark.id,
    newPark.description,
    newPark.address,
    newPark.photo,
    newPark.title,
  ];
  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error completing SELECT park query', err);
      res.sendStatus(500);
    });
});

router.put('/', (req, res) => {
  const updatedPark = req.body;

  const queryText = `UPDATE table_name
  SET "title" = $1, 
  "description" = $2, 
  "address" = $3, 
  "photo" = $4, 
  WHERE id=$5;`;

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