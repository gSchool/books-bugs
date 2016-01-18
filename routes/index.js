var express = require('express');
var router = express.Router();
var knex = require('knex')({
  client: 'pg',
  connection: 'postgres://localhost/books_bugs'
});

router.get('/', function(req, res, next) {
  res.redirect('/books');
});

module.exports = router;
