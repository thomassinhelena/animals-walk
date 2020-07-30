const express = require('express');
const connection = require('../conf');
const { findRenderedDOMComponentWithClass } = require('react-dom/test-utils');
const router = express.Router();

router.get('/', (req, res) => {
  connection.query('SELECT * FROM peoples', (err, result) => {
    if(err) {
      res.sendStatus(400);
    };
    res.send(result);
  });
});

router.get('/:id', (req, res) => {
  connection.query(`SELECT peoples.pseudo, pets.name
  FROM peoples
  INNER JOIN pets ON peoples.id = pets.id`, (err, result) => {
    if(err) {
      res.sendStatus(400);
    };
    res.send(result);
  });
});

router.put('/', (req, res) => {
  connection.query(`UPDATE peoples SET pseudo = '${req.body.pseudo}', email = '${req.body.email}',
  WHERE id = ${req.params.id}`, (err, result) => {
    if(err) {
      res.sendStatus(400);
    };
    res.send(result);
  });
});

router.post('/', (req, res) => {
  connection.query(`INSERT INTO peoples (pseudo, email)
  VALUES ('${req.body.pseudo}', '${req.body.email}')`, (err, result) => {
    if(err) {
      res.sendStatus(400);
    };
    res.send(result);
  });
});

router.post('/send-mail',(req, res) => {
  connection.query(`SELECT email FROM peoples WHERE email != '' `, (err, result) => {
    if(err) {
      res.sendStatus(500);
    };
    for (let i = 0; i < result.length; i++) {
      console.log('envoyer un mail à ', result[i].email);
    }
    res.send(result);
  });
});

router.delete('/:id', (req, res) => {
  connection.query(`DELETE FROM peoples
  WHERE id = ${req.params.id}`, (err, result) => {
    if(err) {
      res.sendStatus(400);
    };
    res.sendStatus(200);
  });
});

module.exports = router;