const express = require('express');
const connection = require('../conf');
const router = express.Router();

router.get('/', function (req, res) {
  connection.query('SELECT * FROM pets', (err, result) => {
		if(err) {
      res.sendStatus(400);
    };
		res.send(result);
});
});

router.get('/:id', (req, res) => {
	connection.query(`SELECT * FROM pets 
		Where id=${req.params.id}`, (err, result) => {
		if(err) {
      console.error(err);
      res.sendStatus(400);
    };
		res.send(result);
	});
});

router.put('/', (req, res) => {
  connection.query(`UPDATE pets SET name = '${req.body.name}', sex = '${req.body.sex}', birth = '${req.body.birth}'
  WHERE id = ${req.params.id}`, (err, result) => {
    if(err) {
      res.sendStatus(400);
    };
    res.send(result);
  });
});

router.post('/', (req, res) => {
  connection.query(`INSERT INTO pets (name, sex, birth)
  VALUES ('${req.body.name}', '${req.body.sex}', '${req.body.birth}')`, (err, result) => {
    if(err) {
      console.error(err);
      res.sendStatus(400);
    };
    res.send(result);
  });
});

router.delete('/:id', (req, res) => {
  connection.query(`DELETE FROM pets
  WHERE id = ${req.params.id}`, (err, result) =>{
    if(err) {
      res.sendStatus(400);
    };
    res.sendStatus(200);
  });
});

module.exports = router;