const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // à copmléter
  password: 'Jaimemesenfants2@', // à compléter
  database: 'animals_walk',
});

module.exports = connection;
